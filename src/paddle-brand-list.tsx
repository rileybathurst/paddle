import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';
import type { PaddleBrandType } from "./types/paddle-brand-types";

export const PaddleBrandList = ({ nodes, sport }: { nodes: PaddleBrandType[]; sport?: string }) => {

  return (
    <ul className='brand_list'>
      {nodes.map((brand: PaddleBrandType) => (
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
