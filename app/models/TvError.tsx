import { useAnimations, useGLTF } from '@react-three/drei';
import { type FC, useLayoutEffect, useRef } from 'react';
import type { Mesh } from 'three';
import type { AnimationActions } from '@/app/types/modelTypes';

const TvError: FC = () => {
  const tvRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF(
    'https://res.cloudinary.com/dhrtde6px/image/upload/v1714846977/3d/ldbteiohap3wdhsmvots.glb'
  );

  const { actions }: AnimationActions = useAnimations(animations, tvRef);

  useLayoutEffect(() => {
    actions['Animation']?.play();
    if (
      tvRef.current &&
      typeof window !== 'undefined' &&
      window.innerWidth < 768
    ) {
      tvRef.current.position.set(-0.65, -0.2, 0);
      tvRef.current.scale.set(0.24, 0.24, 0.24);
      tvRef.current.rotation.set(0.1, 4.7, 0);
    } else {
      tvRef.current.position.set(-0.65, -0.2, 0);
      tvRef.current.scale.set(0.24, 0.24, 0.24);
      tvRef.current.rotation.set(0.16, 4.7, 0);
    }
  }, [actions]);

  return (
    <mesh ref={tvRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default TvError;
