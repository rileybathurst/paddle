import * as React from "react"
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';

// * additional work is done here to split kayak and paddleboard

type BrandType = {
  id: string;
  slug: string;
  svg: string;
  name: string;
  retail: {
    title: string;
    slug: string;
    sport: {
      slug: string;
    }
  }[];
};

const PaddleBrandList = ({ nodes, sport }: { nodes: BrandType[]; sport?: string }) => {

  const BrandSet = new Set<BrandType>();
  let BrandArray: BrandType[] = [];

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
      {BrandArray.map((brand: BrandType) => (
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

export default PaddleBrandList
