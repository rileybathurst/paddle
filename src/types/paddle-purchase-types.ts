import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

export type PaddlePurchaseTypes = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  length: number;
  width: number;
  inflatable: boolean;
  capacity: number;
  demo: boolean;
  discount?: number;
  cutout: PaddleGatsbyImageType;
  sport: {
    slug: string;
  };
  brand: {
    slug: string;
  };
};
