import React from "react";
import type { PaddleGatsbyImageType } from "./paddle-gatsby-image-type";

export type PaddleCompareTypes = {
  tours: {
    id: React.Key;
    name: string;
    image: PaddleGatsbyImageType;
    slug: string;
    sport: string;
    duration?: number;
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
  breadcrumb: string;
  strapiBranchName: string;
  peek_base: string;
};