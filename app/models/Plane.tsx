import { FC, useLayoutEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { Vector3, type Mesh } from 'three';
import type { PlaneProps } from '@/app/types/modelTypes';

const Plane: FC<PlaneProps> = ({ isRotating, position, scale, rotation }) => {
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

  const positionVector = new Vector3(position[0], position[1], position[2]);

  const scaleVector = new Vector3(scale[0], scale[1], scale[2]);

  return (
    <mesh ref={ref} position={positionVector} scale={scaleVector} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
