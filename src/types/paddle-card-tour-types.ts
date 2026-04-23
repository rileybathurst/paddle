import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddleBookNowTypes } from "./paddle-book-now-types";

export type PaddleCardTourTypes = {
  id: React.Key;
  name: string;
  link: string;
  image: PaddleGatsbyImageType;
  excerpt: string;
  paddleBookNow?: PaddleBookNowTypes;
  breadcrumb: string;
}