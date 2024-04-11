import { FC, useLayoutEffect, useRef, Ref } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import type { PlaneProps } from '@/app/types/planeTypes';
import { Mesh } from 'three';

const Plane: FC<PlaneProps> = ({ isRotating, ...props }) => {
  const ref = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF('/assets/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useLayoutEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
