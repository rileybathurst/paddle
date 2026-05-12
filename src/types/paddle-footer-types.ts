import { PaddleRentalRateItem } from "../types/paddle-pricing-chart-types";
import type { PaddleLocationTypes } from "./paddle-location-types";

export type PaddleFooterTypes = {
  topHR: boolean;
  strapiBranch: {
    name: string;
    slug: string;
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
  allStrapiRentalRate: {
    nodes: PaddleRentalRateItem[];
  };
  allStrapiLocation: {
    nodes: PaddleLocationTypes[];
  };
  MenuPlus: {
    href: string;
    label: string;
  }[];
};
