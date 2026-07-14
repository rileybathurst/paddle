import type { PaddleTourCardTypes } from './types/paddle-tour-card-types';

// TODO: add the negative order to South Lake
type TourNode = PaddleTourCardTypes & {
  order?: number | null;
};

const getOrderBucket = (order: number | null | undefined) => {
  if (order == null) {
    return 1;
  }

  if (order < 0) {
    return 2;
  }

  return 0;
};

export const paddleSortToursByOrderNegativeLast = (a: TourNode, b: TourNode) => {
  const aBucket = getOrderBucket(a.order);
  const bBucket = getOrderBucket(b.order);

  if (aBucket !== bBucket) {
    return aBucket - bBucket;
  }

  if (aBucket === 1) {
    return 0;
  }

  return (a.order ?? 0) - (b.order ?? 0);
};