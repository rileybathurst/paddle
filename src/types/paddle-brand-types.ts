export type PaddleBrandType = {
  id: string;
  slug: string;
  svg: string;
  name: string;
  retail: {
    title: string;
    slug: string;
    sport: {
      slug: string;
    };
  }[];
};
