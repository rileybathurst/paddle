export type PaddleBrandType = {
  id: React.Key;
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
