import { paddlePricingChartTypes } from "../types/paddle-pricing-chart-types";
import { PaddleLocalesTypes } from "./paddle-locales-types";

export type PaddleFooterTypes = {
  topHR: boolean;
  strapiBranch: {
    name: string;
    phone: number;
    email: string;
    instagram?: string;
    facebook?: string;
    tripadvisor?: string;
    season_start: string;
    season_end: string;
  };
  logo: React.ReactNode;
  allStrapiBranch: {
    nodes: {
      name: string;
      url: string;
    }[];
  };
  allStrapiRentalRate: paddlePricingChartTypes[];
  allStrapiLocation: PaddleLocalesTypes;};
