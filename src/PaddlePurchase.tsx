import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import type { GatsbyImageType } from "./types/gatsby-image-type";
import { PaddleInchesRemainder } from "./PaddleInchesRemainder";

// TODO: I'm not sure if this is needed or I can loop it easier
interface NameTypes {
  name: string;
}
function Name({ name }: NameTypes) {
  return (
    <div className="badge">
      <h5 className="capitalize">{name}</h5>
    </div>
  );
}

interface BadgeTypes {
  inflatable: boolean;
  demo: boolean;
  discount?: number;
}
const Badges = ({ inflatable, demo, discount }: BadgeTypes) => {
  // TODO: deal with multiple
  if (discount) {
    return (
      <div className="badge">
        <h5 className="capitalize">{discount}% off</h5>
      </div>
    );
  }

  if (inflatable) {
    return <Name name="inflatable" />;
  }

  if (demo) {
    return <Name name="demo" />;
  }

  return null;
}

type purchaseTypes = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  length: number;
  width: number;
  inflatable: boolean;
  capacity: number;
  demo: boolean;
  discount?: number;
  cutout: GatsbyImageType;
  sport: {
    slug: string;
  };
  brand: {
    slug: string;
  };
};
export const PaddlePurchase = ({ id, title, slug, excerpt, length, width, inflatable, capacity, demo, discount, cutout, sport, brand }: purchaseTypes) => {

  return (
    <article key={id} className="card">
      <div className="card-collage">
        {/* <TextureBackgrounds /> */}
        <Link
          to={`/retail/${sport.slug}/${brand.slug}/${slug}`}
          className="image-link"
        >
          <GatsbyImage
            image={cutout?.localFile?.childImageSharp?.gatsbyImageData}
            alt={cutout?.alternativeText || `${title} by ${brand.slug}`}
            className="cutout"
            objectFit="contain"
          // TODO: this has been causing some problems but keep an eye on it
          />
        </Link>
        <Badges
          inflatable={inflatable}
          demo={demo}
          discount={discount}
        />
      </div>
      <h4 className="card__title">
        <Link to={`/retail/${sport.slug}/${brand.slug}/${slug}`}>{title}</Link>
      </h4>
      <hr />
      <p>{excerpt}</p>
      <hr />
      <div className="card__details">
        <h4>
          <PaddleInchesRemainder inches={length} />
          long by {width}" wide
        </h4>
        <h5 className="capitalize">Capacity {capacity}&thinsp;lbs</h5>
      </div>
    </article>
  )
}