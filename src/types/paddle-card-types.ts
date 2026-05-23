import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddleBookNowTypes } from "./paddle-book-now-types";

export type PaddleCardTypes = {
  id: React.Key;
  title: string;
  link: string;
  image: PaddleGatsbyImageType;
  excerpt: string;
  paddleBookNow?: PaddleBookNowTypes;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  // breadcrumb: string; // * I dont think this is needed but double check
}