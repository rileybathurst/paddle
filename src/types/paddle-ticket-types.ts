import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

export type PaddleTicketTypes = {
  id: React.Key;
  ogimage: PaddleGatsbyImageType;
  image: PaddleGatsbyImageType;
  slug: string;
  name: string;
  start?: string;
  finish?: string;
  duration?: number;
  timeframe?: string;
  fitness?: string;
  excerpt: string;
  price: string;
  peek: string;
  featured?: boolean;

  peek_tours_fall_back: string;
  tour_page: string;

  allStrapiSunsetTourTime: {
    nodes: {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
    }[];
  };

  strapiBranchName: string;
};
