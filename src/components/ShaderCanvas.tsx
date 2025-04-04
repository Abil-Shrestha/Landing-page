
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
        // You can use these dimensions if needed
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to initialize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 z-0 pointer-events-none ${className || ''}`}
      style={{ width: '100%', height: '100%', position: 'absolute' }}
    >
      <Canvas 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ShaderBackground />
      </Canvas>
    </div>
  );
};

export default ShaderCanvas;
