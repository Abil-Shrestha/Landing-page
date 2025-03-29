
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ShaderBackground from './ShaderBackground';

interface ShaderCanvasProps {
  className?: string;
}

const ShaderCanvas: React.FC<ShaderCanvasProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update canvas size on window resize
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 ${className || ''}`}
    >
      <Canvas>
        <ShaderBackground />
      </Canvas>
    </div>
  );
};

export default ShaderCanvas;
