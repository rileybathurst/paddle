import type { IGatsbyImageData } from "gatsby-plugin-image";

export interface PaddleTicketTypes {
  id: React.Key;
  ogimage: {
    localFile: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    alternativeText?: string;
  };
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

  strapiLocaleName: string;
}
