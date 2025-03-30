
import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { headphones, play, square } from 'lucide-react';
import { toast } from 'sonner';

interface TextToSpeechProps {
  text: string;
  agentId?: string;
  voiceId?: string;
  apiKey?: string;
}

const TextToSpeech = ({
  text = "Reel-hyp helps you create stunning marketing content with AI. Generate videos, images, and copy that converts. Join thousands of marketers already using our platform to boost their engagement and sales.",
  agentId,
  voiceId = "pqHfZKP75CvOlQylNhV4", // Default to Bill voice
  apiKey,
}: TextToSpeechProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(apiKey || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  
  const conversation = useConversation({
    overrides: {
      tts: {
        voiceId: voiceId,
      },
    },
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      toast.success('Connected to ElevenLabs');
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setIsPlaying(false);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      toast.error('Error playing audio. Please check your API key and try again.');
      setIsPlaying(false);
    }
  });

  const playAudio = async () => {
    try {
      if (!apiKeyInput) {
        setShowApiKeyInput(true);
        return;
      }

      if (isPlaying) {
        await conversation.endSession();
        setIsPlaying(false);
        return;
      }

      setIsPlaying(true);

      // Using text-to-speech API directly since we just want TTS, not a full conversation
      const requestHeaders = new Headers();
      requestHeaders.set("xi-api-key", apiKeyInput);
      requestHeaders.set("Content-Type", "application/json");

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify({
            text,
            model_id: "eleven_turbo_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75
            }
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
      toast.error("Error playing audio. Please check your API key and try again.");
      setIsPlaying(false);
    }
  };

  const handleSubmitApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    setShowApiKeyInput(false);
    playAudio();
  };

  if (showApiKeyInput) {
    return (
      <div className="flex flex-col items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <headphones className="h-5 w-5" />
          <span>Hear about Reel-hyp</span>
        </div>
        <form onSubmit={handleSubmitApiKey} className="flex flex-col gap-2 w-full max-w-md">
          <input
            type="text"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Enter your ElevenLabs API key"
            className="px-3 py-2 rounded border bg-transparent text-white border-white/20"
            required
          />
          <button
            type="submit"
            className="bg-white text-black h-9 flex items-center justify-center text-sm font-medium rounded px-4 hover:bg-white/90 transition-colors"
          >
            Listen Now
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 mb-4">
      <button
        onClick={playAudio}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
      >
        {isPlaying ? (
          <>
            <square className="h-4 w-4" /> Stop Audio
          </>
        ) : (
          <>
            <play className="h-4 w-4" /> Listen to our pitch
          </>
        )}
      </button>
    </div>
  );
};

export default TextToSpeech;
