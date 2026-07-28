import type { PaddleCardTypes } from "./paddle-card-types";

export type PaddleTourCardTypes = PaddleCardTypes & {
  peek: string;
  order?: number | null;
};
