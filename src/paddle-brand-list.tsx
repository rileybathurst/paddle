import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';
import type { PaddleBrandedTypes } from "./types/paddle-branded-types";

export const PaddleBrandList = ({ nodes, sport }: { nodes: PaddleBrandedTypes[]; sport?: string }) => {

  return (
    <ul className='brand_list'>
      {nodes.map((brand: PaddleBrandedTypes) => (
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
