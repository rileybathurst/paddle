import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

export type PaddleRentalsPageTypes = {
  data: {
    allStrapiRentalRate: {
      nodes: {
        id: string;
        item: string;
        oneHour: number;
        threeHour: number;
        fullDay: number;
        pedalAdd: number;
        excerpt: string;
        hero: PaddleGatsbyImageType;
      }[];
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