import type { PaddleLocationTypes } from "./paddle-location-types";

export type PaddleLocationDeckTypes = {
  background?: string;
  season_start?: string; // ? should this be optional? it created a problem with tours
  season_end?: string;
  phone?: string;
  nodes: PaddleLocationTypes[];
};
