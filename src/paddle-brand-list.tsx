import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';
import type { PaddleBrandType } from "./types/paddle-brand-types";

// * additional work is done here to split kayak and paddleboard

export const PaddleBrandList = ({ nodes, sport }: { nodes: PaddleBrandType[]; sport?: string }) => {

  console.log('🦄');
  console.log(nodes);

  const BrandSet = new Set<PaddleBrandType>();
  let BrandArray: PaddleBrandType[] = [];

  if (sport) {
    nodes.map((brand) => {
      brand.retail.map((retail) => {

        if (retail.sport.slug === sport) {
          BrandSet.add(brand);
        }

        return BrandSet;
      })
    });

    BrandArray = (Array.from(BrandSet));
  } else {
    // TODO: this needs a check if anything is published in the brand if no sport is passed
    BrandArray = (Array.from(nodes));
  }

  return (
    <ul className='brand_list'>
      {BrandArray.map((brand: PaddleBrandType) => (
        <li key={brand.id}>
          <Link to={`/retail/${sport}/${brand.slug}`}>
            {brand.svg ?
              <SVG
                src={brand.svg}
              />
              : null}
            {brand.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
