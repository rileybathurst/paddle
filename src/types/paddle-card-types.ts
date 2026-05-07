import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddleBookNowTypes } from "./paddle-book-now-types";

export type PaddleCardTypes = {
  id: React.Key;
  title: string;
  link: string;
  image: PaddleGatsbyImageType;
  collage?: PaddleGatsbyImageType;
  excerpt: string;
  paddleBookNow?: PaddleBookNowTypes;
  // breadcrumb: string; // * I dont think this is needed but double check
}