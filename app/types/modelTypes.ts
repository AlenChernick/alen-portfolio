import type { Dispatch, SetStateAction } from 'react';
import type { BufferGeometry, Euler, Material, Mesh, Skeleton } from 'three';

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
  position: any;
  scale: any;
  rotation: any;
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
};

export type WolfProps = {
  position: any;
  rotation: any;
  scale: any;
  currentAnimation: string;
};

export type SkinnedMeshObject = {
  id: string | number | bigint | undefined;
  name: string;
  geometry: BufferGeometry;
  material: Material | Material[];
  skeleton: Skeleton | undefined;
};

export type AnimationActions = Record<string, any>;

export type Materials = {
  [name: string]: Material;
};

export type Nodes = {
  [name: string]: Mesh;
};
