import type { PaddleLocationCardTypes } from "./paddle-location-card-types";

export type PaddleLocationDeckTypes = {
  background?: string;
  season_start?: string; // ? should this be optional? it created a problem with tours
  season_end?: string;
  phone?: string;
  nodes: PaddleLocationCardTypes[];
};
