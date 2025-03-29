
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Create a custom shader material
const ShaderMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(1, 1),
  },
  // Vertex shader
  `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  // Fragment shader from user's code
  `
    uniform float iTime;
    uniform vec2 iResolution;

    #define t iTime
    #define r iResolution.xy

    void mainImage( out vec4 fragColor, in vec2 fragCoord ){
      vec3 c;
      float l,z=t;
      for(int i=0;i<3;i++) {
        vec2 uv,p=fragCoord.xy/r;
        uv=p;
        p-=.5;
        p.x*=r.x/r.y;
        z+=.07;
        l=length(p);
        uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
        c[i]=.01/length(mod(uv,1.)-.5);
      }
      fragColor=vec4(c/l,t);
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `
);

// Register the material
extend({ ShaderMaterial });

// Create component types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shaderMaterial': any;
    }
  }
}

const ShaderBackground = () => {
  const materialRef = useRef<any>();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.iTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={materialRef} />
    </mesh>
  );
};

export default ShaderBackground;
