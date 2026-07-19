import type { PaddleRentalRateType } from "./paddle-rental-rate-type";

export type PaddleRentalRateItem = PaddleRentalRateType & {
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
  link?: string;
};
