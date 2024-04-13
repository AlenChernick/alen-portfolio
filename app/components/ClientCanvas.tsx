'use client';
import { type FC, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { type ClientCanvasProps } from '@/app/types/componentTypes';
import { Euler } from 'three';
import Loader from '@/app/components/Loader';
import FantasyIsland from '@/app/models/FantasyIsland';
import Sky from '@/app/models/Sky';
import Bird from '@/app/models/Bird';
import Plane from '@/app/models/Plane';

const ClientCanvas: FC<ClientCanvasProps> = ({ setCurrentStage }) => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    const rotation = [0.13, 3.89, 0];
    let screenPosition = [0, -6.8, -47];
    let screenScale = null;

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -5, -42];
    } else {
      screenScale = [0.4, 0.4, 0.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenPosition, screenScale;

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -2, 0];
    }

    return { screenPosition, screenScale }; // Return both position and scale arrays
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const { screenPosition, screenScale } = adjustPlaneForScreenSize();
  const planeRotation = new Euler(0, 20, 0);

  return (
    <Canvas
      camera={{ near: 0.1, far: 1000 }}
      className={`w-full h-screen bg-transparent ${
        isRotating ? 'cursor-grabbing' : 'cursor-grab'
      }`}>
      <Suspense fallback={<Loader />}>
        <directionalLight position={[2, 10, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <hemisphereLight color='#b1e1ff' groundColor='#000000' intensity={1} />
        <Bird />
        <Sky isRotating={isRotating} />
        <FantasyIsland
          position={islandPosition}
          scale={islandScale}
          rotation={rotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          scale={screenScale}
          position={screenPosition}
          isRotating={isRotating}
          rotation={planeRotation}
        />
      </Suspense>
    </Canvas>
  );
};

export default ClientCanvas;
