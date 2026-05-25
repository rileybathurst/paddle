import * as React from "react";
import { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";
import { PaddleTourCardTypes } from "./paddle-tour-card-types";

export type PaddleTourViewTypes = {
  data: {
    strapiTour: {
      id: React.Key;
      name: string;
      information: {
        data: {
          information: string;
        };
      };
      start: string;
      finish: string;
      duration: number;
      timeframe: string;
      minimum: number;
      fitness: string;
      peek: string;
      sport: string;
      excerpt: string;
      price: number;
      slug: string;
      hero: PaddleGatsbyImageType;

      branch: {
        name: string;
        peek_tours: string;
        season_start: string;
        season_end: string;
        phone: string;
      };
    };

    allStrapiMoonlightTourDateTime: {
      nodes: {
        id: React.Key;
        date: string;
        start: string;
        finish: string;
      }[];
    };

    allStrapiSunsetTourTime: {
      nodes: {
        id: React.Key;
        startDate: string;
        endDate: string;
        startTime: string;
        endTime: string;
      }[];
    };

    branch: {
      name: string;
    };

    allStrapiTour: {
      nodes: PaddleTourCardTypes[];
    };
  };
}