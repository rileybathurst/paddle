import { PaddlePurchaseTypes } from "./paddle-purchase-types";

export type PaddleBrandedTypes = PaddlePurchaseTypes & {
  brand: {
    id: string;
    slug: string;
    name: string;
    svg?: string;
  };
}