import type { Euler } from 'three';

export type PlaneProps = {
  isRotating: boolean;
  scale: number[];
  position: number[];
  rotation: Euler;
};

export type SkyProps = {
  isRotating: boolean;
};

export type AnimationActions = Record<string, any>;
