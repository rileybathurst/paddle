import type { IGatsbyImageData } from "gatsby-plugin-image";

export interface GatsbyImageType {
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  alternativeText: string;
}
