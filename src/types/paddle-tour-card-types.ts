import type { PaddleCardTypes } from "./paddle-card-types";

export type PaddleTourCardTypes = PaddleCardTypes & {
  slug: string;
  peek: string;
};
