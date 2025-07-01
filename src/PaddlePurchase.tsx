import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import type { GatsbyImageType } from "./types/gatsby-image-type";
import { PaddleInchesRemainder } from "./PaddleInchesRemainder";
import { PaddleTextureBackgrounds } from "./PaddleTextureBackgrounds";

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
  sportSlug: string;
  brandSlug: string;
  baseOne: { image: GatsbyImageType };
  baseTwo: { image: GatsbyImageType };
  baseThree: { image: GatsbyImageType };
  topOne: { image: GatsbyImageType };
  topTwo: { image: GatsbyImageType };
  topThree: { image: GatsbyImageType };
};
export const PaddlePurchase = ({ id, title, slug, excerpt, length, width, inflatable, capacity, demo, discount, cutout, sportSlug, brandSlug, baseOne, baseTwo, baseThree, topOne, topTwo, topThree }: purchaseTypes) => {

  return (
    <article key={id} className="card">
      <div className="card-collage">

        <PaddleTextureBackgrounds
          baseOne={baseOne}
          baseTwo={baseTwo}
          baseThree={baseThree}
          topOne={topOne}
          topTwo={topTwo}
          topThree={topThree}
        />
        <Link
          to={`/retail/${sportSlug}/${brandSlug}/${slug}`}
          className="image-link"
        >
          <GatsbyImage
            image={cutout?.localFile?.childImageSharp?.gatsbyImageData}
            alt={cutout?.alternativeText || `${title} by ${brandSlug}`}
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
        <Link to={`/retail/${sportSlug}/${brandSlug}/${slug}`}>{title}</Link>
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