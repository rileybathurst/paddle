import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';
import type { PaddleBrandListTypes } from "./types/paddle-brand-list-types";

export const PaddleBrandList = ({ brands, sport }: { brands: PaddleBrandListTypes[]; sport?: string }) => {

  return (
    <ul className='brand_list'>
      {brands.map((brand: PaddleBrandListTypes) => (
        <li key={brand.id}>
          <Link to={`/retail/${sport}/${brand.slug}`}
            className='button'
            >
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
