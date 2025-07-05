import type { IGatsbyImageData } from "gatsby-plugin-image";

export interface PaddleGatsbyImageType {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  alternativeText: string;
}
