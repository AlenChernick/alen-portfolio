import type { Euler } from 'three';

export type PlaneProps = {
  isRotating: boolean;
  planeScale: number[];
  planePosition: number[];
  rotation: Euler;
};

export type SkyProps = {
  isRotating: boolean;
};
