export type PaddleCompareTypes = {
  tours: {
    id: number;
    name: string;
    slug: string;
    sport: string;
    duration?: string;
    timeframe?: string;
    start?: string;
    finish?: string;
    fitness?: string;
    location: string;
    excerpt: string;
    minimum: number;
    price: number;
    peek?: string;
  }[];
  strapiBranchName: string;
  peek_base: string;
};