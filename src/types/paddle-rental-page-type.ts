import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import type { PaddleRentalRateType } from "./paddle-rental-rate-type";

export type PaddleRentalsPageTypes = {
  data: {
    allStrapiRentalRate: {
      nodes: (PaddleRentalRateType & {
        pedalAdd: number;
        excerpt: string;
        hero: PaddleGatsbyImageType; // * hobie eclipse uses this in south lake
      })[];
    };

    strapiBranch: {
      rental_excerpt: string;
      rental: {
        data: {
          rental: string;
        };
      };
      peek_membership: string;
      peek_six_pack: string;
    };

    strapiMembership: {
      title: string;
      excerpt: string;
      six: string;
    };

    strapiLocation: {
      hero: PaddleGatsbyImageType;
    };
  };
};