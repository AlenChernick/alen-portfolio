import { useGLTF } from '@react-three/drei';

const Sky = () => {
  const sky = useGLTF('/assets/3d/sky.glb');
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
