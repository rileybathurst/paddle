import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

export type PaddlePurchaseTypes = {
  id: React.Key;
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
    id: React.Key;
    slug: string
    title: string;
  };
  brand: {
    id: React.Key;
    slug: string
    name: string;
  };

  baseOne: { image: PaddleGatsbyImageType };
  baseTwo: { image: PaddleGatsbyImageType };
  baseThree: { image: PaddleGatsbyImageType };
  topOne: { image: PaddleGatsbyImageType };
  topTwo: { image: PaddleGatsbyImageType };
  topThree: { image: PaddleGatsbyImageType };
};