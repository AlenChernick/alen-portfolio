'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '@/app/components/Loader';
import FantasyIsland from '@/app/models/FantasyIsland';
import Sky from '@/app/models/Sky';

const ClientCanvas = () => {
  const adjustIslandForScreenSize = () => {
    const screenPosition = [0, -8.5, -43];
    const rotation = [0.1, 8.8, 0];
    let screenScale = null;

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      screenScale = [0.26, 0.26, 0.26];
    } else {
      screenScale = [0.4, 0.4, 0.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();

  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} className='w-full h-screen bg-transparent'>
      <Suspense fallback={<Loader />}>
        <directionalLight position={[5, 10, 1]} intensity={2.5} />
        <ambientLight intensity={0.5} />
        <hemisphereLight color='#b1e1ff' groundColor='#000000' intensity={1} />
        <Sky />
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
