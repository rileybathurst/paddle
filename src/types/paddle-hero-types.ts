import type { PaddleGatsbyImageType } from './paddle-gatsby-image-type';

export type PaddleHeroTypes = {
  image: PaddleGatsbyImageType
  collage?: PaddleGatsbyImageType
  overlay?: React.ReactNode
  background?: string
};