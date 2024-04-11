'use client';

import { type FC, useLayoutEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import type { PlaneProps } from '@/app/types/planeTypes';

const Plane: FC<PlaneProps> = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF('/assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useLayoutEffect(() => {}, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
