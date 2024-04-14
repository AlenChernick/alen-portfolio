import type { Euler, Material, Mesh } from 'three';

export type PlaneProps = {
  isRotating: boolean;
  scale: number[];
  position: number[];
  rotation: Euler;
};

export type SkyProps = {
  isRotating: boolean;
};

export type FantasyIslandProps = {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
};

export type AnimationActions = Record<string, any>;

export type Materials = {
  [name: string]: Material;
};

export type Nodes = {
  [name: string]: Mesh;
};
