import * as React from "react";

export type PaddleRentalRateItem = {
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
};

export type paddlePricingChartTypes = {
  rentalRates: {
    nodes: PaddleRentalRateItem[];
  };
  branches?: {
    slug: string;
  } | null;
};
