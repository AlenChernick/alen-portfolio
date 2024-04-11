'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Euler } from 'three';
import Loader from '@/app/components/Loader';
import FantasyIsland from '@/app/models/FantasyIsland';
import Sky from '@/app/models/Sky';
import Dragon from '@/app/models/Dragon';
import Plane from '@/app/models/Plane';

const ClientCanvas = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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

  const adjustPlaneForScreenSize = () => {
    let screenPosition, screenScale;

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, 0];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  const planeRotation = new Euler(0, 20, 0);

  return (
    <Canvas
      camera={{ near: 0.1, far: 1000 }}
      className={`w-full h-screen bg-transparent ${
        isRotating ? 'cursor-grabbing' : 'cursor-grab'
      }`}>
      <Suspense fallback={<Loader />}>
        <directionalLight position={[5, 10, 1]} intensity={2.5} />
        <ambientLight intensity={0.5} />
        <hemisphereLight color='#b1e1ff' groundColor='#000000' intensity={1} />
        <Dragon />
        <Sky />
        <FantasyIsland
          position={islandPosition}
          scale={islandScale}
          rotation={rotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          planeScale={planeScale}
          planePosition={planePosition}
          isRotating={isRotating}
          rotation={planeRotation}
        />
      </Suspense>
    </Canvas>
  );
};

export default ClientCanvas;
