import * as React from "react"
import { Link } from 'gatsby';

// * additional work is done here to split kayak and paddleboard

type BrandListTypes = {
  nodes: {
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
    }[]
  }[];
  sport?: string;
}

const PaddleBrandList = ({ nodes, sport }: BrandListTypes) => {

  const BrandSet = new Set();
  
  nodes.map((brand) => {
    brand.retail.map((retail) => {
      if (retail.sport.slug === sport) {
        BrandSet.add(brand);
      }
    })
  });

  const BrandArray = (Array.from(BrandSet));

// TODO: if I only want a specific sport 

  return (
    <ul className='brand_list'>
      {BrandArray.map((brand: any) => (
        <li key={brand.id}>
          <Link to={`/retail/${sport}/${brand.slug}`}>
            {brand.svg ?
              <div
                dangerouslySetInnerHTML={{ __html: brand.svg }}
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
