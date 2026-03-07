import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

type BasePaddlePurchaseTypes = {
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

  baseOne: { image: PaddleGatsbyImageType };
  baseTwo: { image: PaddleGatsbyImageType };
  baseThree: { image: PaddleGatsbyImageType };
  topOne: { image: PaddleGatsbyImageType };
  topTwo: { image: PaddleGatsbyImageType };
  topThree: { image: PaddleGatsbyImageType };
};

export type PaddlePurchaseTypes = BasePaddlePurchaseTypes & (
  | { sport: { slug: string }; sportSlug?: string }
  | { sportSlug: string; sport?: { slug: string } }
) & (
  | { brand: { slug: string }; brandSlug?: string }
  | { brandSlug: string; brand?: { slug: string } }
);
