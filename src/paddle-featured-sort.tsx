import React from "react";

type PaddleFeaturedSortTypes = {
  id: React.Key;
  featured?: boolean | null;
};

export const PaddleFeaturedSort = (nodes: PaddleFeaturedSortTypes[]) => {
  nodes.sort((a, b) => {
    if (a.featured === b.featured) return 0;
    if (a.featured === true) return -1;
    if (b.featured === true) return 1;
    if (a.featured === null && b.featured === false) return -1;
    if (a.featured === false && b.featured === null) return 1;
    return 0;
  });
  // console.log(nodes);
}