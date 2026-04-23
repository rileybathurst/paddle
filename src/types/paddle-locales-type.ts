import type { PaddleLocationTypes } from "./paddle-location-types";

export type PaddleLocalesTypes = {
  season_start: string;
  season_end: string;
  phone: number;
  nodes?: PaddleLocationTypes[];
  single?: PaddleLocationTypes;
};
