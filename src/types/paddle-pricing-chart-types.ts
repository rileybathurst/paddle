import * as React from "react";

export type paddlePricingChartTypes = {
  rentalRates: {
    nodes: {
      id: React.Key;
      item: string;
      oneHour: number;
      threeHour: number;
      fullDay: number;
      pedalAdd?: number;

      branch: {
        slug: string;
      };

      retail?: {
        slug: string;
        sport: {
          slug: string;
        };
        brand: {
          slug: string;
        };
      };
    }[];
  };
  branch: {
    slug: string;
  }
};
