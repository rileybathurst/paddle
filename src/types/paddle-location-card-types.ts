export interface PaddleLocationCardTypes {
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
  background?: string;

  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  commonName?: string;

  season_start?: string;
  season_end?: string;
  phoneNumber?: string;

  offSeasonDetails?: string;
  phone?: boolean;
  weatherPermitting?: boolean;
}
