'use client';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import type { Mesh } from 'three';
import type { AnimationActions } from '@/app/types/modelTypes';

const Bird = () => {
  const birdRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF('/assets/3d/bird.glb');
  const { actions }: AnimationActions = useAnimations(animations, birdRef);

  useLayoutEffect(() => {
    actions['Take 001']?.play();
  }, []);

  return (
    <mesh position={[-1, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
