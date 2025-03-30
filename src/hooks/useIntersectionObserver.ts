
import { type RefObject, useEffect, useState } from 'react';

/**
 * Custom hook that uses the Intersection Observer API to detect when an element is visible in the viewport
 * @param elementRef - A ref to the element to observe
 * @param options - IntersectionObserver options (threshold, root, rootMargin)
 * @param once - When true, stops observing after the element becomes visible once
 * @returns The intersection observer entry or undefined
 */
function useIntersectionObserver(
    elementRef: RefObject<Element>,
    { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit,
    once = false // Add once parameter
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
        
        // If once is true and the element is intersecting, disconnect the observer
        if (once && entry.isIntersecting) {
            observer?.disconnect();
        }
    };

    useEffect(() => {
        const node = elementRef?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin]); // Re-run if params change

    return entry;
}

export default useIntersectionObserver;
