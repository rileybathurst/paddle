import * as React from "react";

export type paddlePricingChartTypes = {
  rentalRates: {
    nodes: {
      id: React.Key;
      item: string;
      oneHour: number;
      threeHour: number;
      fullDay: number;
    }[];
  };
  rentalAddons?: {
    nodes: {
      id: React.Key;
      name: string;
      single: number;
      double: number;
      sup: number;
    }[];
  };
};
