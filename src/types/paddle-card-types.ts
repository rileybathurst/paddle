import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddleBookNowTypes } from "./paddle-book-now-types";

export type PaddleCardTypes = {
  link: string;
  image: PaddleGatsbyImageType;
  title: string;
  excerpt: string;
  paddleBookNow?: PaddleBookNowTypes;
}