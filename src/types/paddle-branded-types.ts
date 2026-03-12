import { PaddlePurchaseTypes } from "./paddle-purchase-types";

export interface PaddleBrandedTypes extends PaddlePurchaseTypes {
  brand: {
    id: string;
    slug: string;
    name: string;
    
  };
}