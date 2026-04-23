import type { PaddleLocationTypes } from "./paddle-location-types";

export type PaddleLocalesTypes = {
  single?: PaddleLocationTypes;
  nodes?: PaddleLocationTypes[];
  season_start: string;
  season_end: string;
  phone: number;
};