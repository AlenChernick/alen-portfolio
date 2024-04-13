'use client';

import { type FC, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { SkyProps } from '@/app/types/modelTypes';
import type { Mesh } from 'three';

const Sky: FC<SkyProps> = ({ isRotating }) => {
  const sky = useGLTF(
    'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042205/3d/sky_bakqsy.glb'
  );
  const skyRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
