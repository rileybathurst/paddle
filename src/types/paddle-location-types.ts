export interface PaddleLocationTypes {
  id: React.Key;
  svg: string;
  name: string;
  link: string;
  description: {
    data: {
      description: string;
    };
  };
  opening_time: string;
  closing_time: string;

  local: {
    season_start: string;
    season_end: string;
  };

  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  commonName?: string;

  season_start: string;
  season_end: string;
  phone: number;

  offSeasonDetails?: string;
  weatherPermitting?: boolean;
}
