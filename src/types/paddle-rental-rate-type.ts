export type PaddleRentalRateType = {
  id: React.Key;
  item: string;
  oneHour?: number | null;
  threeHour?: number | null;
  fullDay?: number | null;
}