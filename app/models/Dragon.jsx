import { useGLTF } from '@react-three/drei';

const Dragon = () => {
  const { scene, animations } = useGLTF('/assets/3d/dragon.glb');

  const lightGreenColor = 0x9fff9f;

  scene.traverse((child) => {
    if (child.isMesh) {
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
