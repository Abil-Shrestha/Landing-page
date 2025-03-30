import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils'; // Assuming cn utility exists

interface TextSegment {
    text: string;
    index: number;
}

interface TypewriterTextProps {
    textStream: string | AsyncIterable<string>; // Allow string or stream
    className?: string;
    speed?: number; // 1-100, affects typewriter speed and fade delays
    mode?: 'typewriter' | 'fade';
    onComplete?: () => void;
    fadeDuration?: number; // milliseconds
    segmentDelay?: number; // milliseconds for fade mode segment delay
    characterChunkSize?: number; // Override characters per frame in typewriter mode
    onError?: (error: any) => void;
}

// Define our own type to satisfy TypeScript
interface WordSegmenter {
    segment: string;
}

const useTypewriter = (props: TypewriterTextProps) => {
    const {
        textStream,
        speed = 50, // Default speed
        mode = 'typewriter',
        onComplete,
        fadeDuration,
        segmentDelay,
        characterChunkSize,
        onError,
    } = props;

    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [segments, setSegments] = useState<TextSegment[]>([]);

    // Refs for props that might change and affect ongoing animations
    const speedRef = useRef(speed);
    const modeRef = useRef(mode);
    const fadeDurationRef = useRef(fadeDuration);
    const segmentDelayRef = useRef(segmentDelay);
    const characterChunkSizeRef = useRef(characterChunkSize);
    const onCompleteRef = useRef(onComplete);
    const isCancelledRef = useRef(false);
    const animationFrameRef = useRef<number | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const textSourceRef = useRef(textStream); // Store initial text source
    const currentIndexRef = useRef(0);

    useEffect(() => {
        speedRef.current = speed;
        modeRef.current = mode;
        fadeDurationRef.current = fadeDuration;
        segmentDelayRef.current = segmentDelay;
        characterChunkSizeRef.current = characterChunkSize;
    }, [speed, mode, fadeDuration, segmentDelay, characterChunkSize]);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    // --- Calculation Functions --- 
    const getCharacterChunkSize = useCallback(() => {
        if (typeof characterChunkSizeRef.current === 'number') {
            return Math.max(1, characterChunkSizeRef.current);
        }
        const currentSpeed = Math.min(100, Math.max(1, speedRef.current));
        if (modeRef.current === 'typewriter') {
            // Slower speed = smaller chunks (more steps), Faster speed = larger chunks (fewer steps)
            // Non-linear mapping: Speed 1 -> 1 chunk, Speed 100 -> ~10 chunk 
            return currentSpeed < 25 ? 1 : Math.max(1, Math.round((currentSpeed - 25) / 10));
        }
        return 1; // Default for other modes or if calculation is complex
    }, []);

    const getSegmentDelay = useCallback(() => {
        if (typeof segmentDelayRef.current === 'number') {
            return Math.max(0, segmentDelayRef.current);
        }
        // Slower speed = longer delay, Faster speed = shorter delay (sqrt makes it less sensitive)
        return Math.max(1, Math.round(100 / Math.sqrt(Math.min(100, Math.max(1, speedRef.current)))));
    }, []);

    const getFadeDuration = useCallback(() => {
        if (typeof fadeDurationRef.current === 'number') {
            return Math.max(10, fadeDurationRef.current);
        }
        // Similar logic to segment delay
        return Math.round(1000 / Math.sqrt(Math.min(100, Math.max(1, speedRef.current))));
    }, []);

    // --- Core Logic --- 
    const segmentText = useCallback((text: string) => {
        if (modeRef.current === 'fade') {
            try {
                // Check if Intl.Segmenter exists
                if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
                    // Use type assertion to tell TypeScript that Segmenter exists
                    const segmenter = new (Intl as any).Segmenter(navigator.language, { granularity: 'word' });
                    const segmented = Array.from(segmenter.segment(text));
                    setSegments(
                        segmented.map((s: any, i: number) => ({ 
                            text: s.segment, 
                            index: i 
                        }))
                    );
                } else {
                    // Fallback for browsers without Intl.Segmenter
                    throw new Error('Intl.Segmenter not supported');
                }
            } catch (error) {
                // Fallback for environments without Intl.Segmenter or for errors
                console.warn('Intl.Segmenter not supported or failed, using basic split.');
                setSegments(text.split(/(\s+)/).filter(Boolean).map((s, i) => ({ text: s, index: i })));
                onError?.(error);
            }
        }
    }, [onError]);

    const markComplete = useCallback(() => {
        if (!isCancelledRef.current) {
            isCancelledRef.current = true; // Prevent multiple calls
            setIsComplete(true);
            onCompleteRef.current?.();
        }
    }, []);

    const resetState = useCallback(() => {
        currentIndexRef.current = 0;
        setDisplayedText('');
        setSegments([]);
        setIsComplete(false);
        isCancelledRef.current = false;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    }, []);

    const runTypewriter = useCallback((fullText: string) => {
        let lastFrameTime = 0;

        const frame = (currentTime: number) => {
            const delay = getSegmentDelay(); // Delay between rendering chunks
            if (currentTime - lastFrameTime < delay) {
                animationFrameRef.current = requestAnimationFrame(frame);
                return;
            }
            lastFrameTime = currentTime;

            if (currentIndexRef.current >= fullText.length) {
                markComplete();
                return;
            }

            const chunkSize = getCharacterChunkSize();
            const nextIndex = Math.min(currentIndexRef.current + chunkSize, fullText.length);
            const nextText = fullText.slice(0, nextIndex);

            setDisplayedText(nextText);
            if (modeRef.current === 'fade') {
                segmentText(nextText);
            }

            currentIndexRef.current = nextIndex;

            if (nextIndex < fullText.length) {
                animationFrameRef.current = requestAnimationFrame(frame);
            } else {
                markComplete();
            }
        };

        animationFrameRef.current = requestAnimationFrame(frame);
    }, [getSegmentDelay, getCharacterChunkSize, segmentText, markComplete]);

    const runStream = useCallback(async (stream: AsyncIterable<string>) => {
        const controller = new AbortController();
        abortControllerRef.current = controller;
        let currentFullText = '';
        try {
            for await (const chunk of stream) {
                if (controller.signal.aborted) return;
                currentFullText += chunk;
                setDisplayedText(currentFullText);
                segmentText(currentFullText);
                // Optional: yield to the event loop if chunks arrive too fast
                // await new Promise(resolve => setTimeout(resolve, 0)); 
            }
            markComplete();
        } catch (error: any) {
            if (error.name !== 'AbortError') { // Ignore abort errors
                console.error("Error processing text stream:", error);
                onError?.(error);
            }
            markComplete(); // Mark as complete even on error
        }
    }, [segmentText, markComplete, onError]);

    const start = useCallback(() => {
        resetState();
        const source = textSourceRef.current;
        if (typeof source === 'string') {
            runTypewriter(source);
        } else if (source && typeof source[Symbol.asyncIterator] === 'function') {
            runStream(source);
        } else {
            console.warn('TypewriterText: Invalid textStream prop.');
            markComplete();
        }
    }, [resetState, runTypewriter, runStream, markComplete]);

    const pause = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        // Cannot truly pause an async iterator easily, but can stop processing further chunks
        if (abortControllerRef.current) {
            abortControllerRef.current.abort(); // Stop the stream processing
        }
    }, []);

    const resume = useCallback(() => {
        // Resume only makes sense for string-based typewriter
        const source = textSourceRef.current;
        if (typeof source === 'string' && !isComplete && !animationFrameRef.current) {
            runTypewriter(source); // Restart animation from current index
        }
        // Resuming async iterator is complex, typically restart the process
    }, [isComplete, runTypewriter]);

    // Effect to start the process when the component mounts or textStream changes
    useEffect(() => {
        textSourceRef.current = textStream; // Update ref if prop changes
        start();
        return () => {
            // Cleanup on unmount or before restarting
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (abortControllerRef.current) abortControllerRef.current.abort();
        };
    }, [textStream, start]); // Rerun only if textStream or start function identity changes

    return {
        displayedText,
        isComplete,
        segments,
        getFadeDuration,
        getSegmentDelay,
        reset: start, // Reset now restarts the process
        start,
        pause,
        resume,
    };
};


const TypewriterText: React.FC<TypewriterTextProps> = (props) => {
    const {
        textStream,
        className,
        mode = 'typewriter',
        speed = 50, // Pass speed to hook
        ...rest // Pass other props like onComplete etc. to hook
    } = props;

    const { displayedText, isComplete, segments, getFadeDuration, getSegmentDelay } = useTypewriter({
        textStream,
        mode,
        speed,
        ...rest
    });

    return (
        <div
            className={cn(
                'text-muted-foreground prose prose-sm dark:prose-invert text-sm',
                // Use a transition for opacity when completing
                'transition-opacity duration-300 ease-out',
                className
            )}
            // Apply opacity based on completion state for a subtle effect
            style={{ opacity: isComplete ? 1 : 0.9 }} // Example: slightly fade in/out
        >
            {mode === 'fade' ? (
                <span aria-label={displayedText}> {/* Improve accessibility */}
                    {segments.map((segment, index) => (
                        <span
                            key={segment.index}
                            className="transition-opacity duration-[var(--fade-d    uration)] ease-in-out"
                            style={{
                                // Calculate delay based on segment index and speed
                                transitionDelay: `${index * getSegmentDelay()}ms`,
                                // Set opacity to 1 for displayed segments
                                opacity: 1,
                                // Use CSS variable for duration
                                '--fade-duration': `${getFadeDuration()}ms`,
                            } as React.CSSProperties} // Type assertion for CSS variable
                        >
                            {segment.text}
                        </span>
                    ))}
                </span>
            ) : (
                displayedText // Render plain text for typewriter mode
            )}
        </div>
    );
};

export default TypewriterText;
