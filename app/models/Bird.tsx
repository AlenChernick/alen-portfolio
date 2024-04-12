'use client';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useRef, useLayoutEffect, type FC } from 'react';
import type { Mesh } from 'three';
import type { AnimationActions } from '@/app/types/modelTypes';
import { useFrame } from '@react-three/fiber';

const Bird: FC = () => {
  const birdRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF('/assets/3d/bird.glb');
  const { actions }: AnimationActions = useAnimations(animations, birdRef);

  useLayoutEffect(() => {
    actions['Take 001']?.play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-4, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
