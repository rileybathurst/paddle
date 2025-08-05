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
    }[];
  };
};
