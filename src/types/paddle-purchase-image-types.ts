import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddlePurchaseTypes } from "./paddle-purchase-types";

export type PaddlePurchaseAndImageTypes = PaddlePurchaseTypes & {
  baseOne: { image: PaddleGatsbyImageType };
  baseTwo: { image: PaddleGatsbyImageType };
  baseThree: { image: PaddleGatsbyImageType };
  topOne: { image: PaddleGatsbyImageType };
  topTwo: { image: PaddleGatsbyImageType };
  topThree: { image: PaddleGatsbyImageType };
};