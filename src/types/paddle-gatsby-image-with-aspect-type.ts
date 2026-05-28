import type { IGatsbyImageData } from "gatsby-plugin-image";

export type PaddleGatsbyImageWithAspectType = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
      resize: {
        aspectRatio: number;
      };
    };
  };
  alternativeText: string;
  caption?: string;
}