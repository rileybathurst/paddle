import * as React from "react";

export type paddlePricingChartTypes = {
  rentalRates: {
    nodes: {
      id: React.Key;
      item: string;
      oneHour?: number | null;
      threeHour?: number | null;
      fullDay?: number | null;
      pedalAdd?: number | null;

      branches?: {
        slug: string;
      }[];

      retail?: {
        slug: string;
        sport: {
          slug: string;
        };
        brand: {
          slug: string;
        };
      } | null;
    }[];
  };
  branches?: {
    slug: string;
  } | null;
};
