'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '@/app/components/Loader';
import FantasyIsland from '@/app/models/FantasyIsland';

const ClientCanvas = () => {
  const adjustIslandForScreenSize = () => {
    const screenPosition = [0, -5.5, -43];
    const rotation = [0.1, 8.8, 0];
    let screenScale = null;

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
    } else {
      screenScale = [0.4, 0.4, 0.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();

  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} className='w-full h-screen bg-transparent'>
      <Suspense fallback={<Loader />}>
        <directionalLight />
        <ambientLight />
        <pointLight />
        <spotLight />
        <hemisphereLight />
        <FantasyIsland
          position={islandPosition}
          scale={islandScale}
          rotation={rotation}
        />
      </Suspense>
    </Canvas>
  );
};

export default ClientCanvas;
