import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';
import type { PaddlePurchaseTypes } from "./types/paddle-purchase-types";

export const PaddleBrandList = ({ nodes, sport }: { nodes: PaddlePurchaseTypes[]; sport?: string }) => {

  // TODO: testing
  console.log(nodes);
  nodes.map((node: PaddlePurchaseTypes) => {
    console.log(node);
  });

  return (
    <ul className='brand_list'>
      {nodes.map((node: PaddlePurchaseTypes) => (
        <li key={node.brand.id}>
          <Link to={`/retail/${sport}/${node.brand.slug}`}>
            {node.brand.svg ?
              <SVG
                src={node.brand.svg}
              />
              : null}
            {node.brand.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
