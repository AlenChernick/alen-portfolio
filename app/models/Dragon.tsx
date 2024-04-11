import { useGLTF } from '@react-three/drei';
import { Object3D, Object3DEventMap } from 'three/src/core/Object3D.js';

const Dragon = () => {
  const { scene, animations } = useGLTF('/assets/3d/dragon.glb');

  const lightGreenColor = 0x9fff9f;

  scene.traverse((child: any) => {
    if (child.isMesh as any) {
      child.material.color.set(lightGreenColor);
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;
