import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import type { PaddleGatsbyImageType } from "./types/paddle-gatsby-image-type";
import { PaddleInchesRemainder } from "./paddle-inches-remainder";
import { PaddleTextureBackgrounds } from "./paddle-texture-backgrounds";

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

// TODO: use the way I do specs for this
// TODO: deal with multiple
const Badges = ({ inflatable, demo, discount }: BadgeTypes) => {
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
  id: React.Key;
  title: string;
  slug: string;
  excerpt: string;
  length: number;
  width: number;
  inflatable: boolean;
  capacity: number;
  demo: boolean;
  discount?: number;
  cutout: PaddleGatsbyImageType;
  sportSlug: string;
  brandSlug: string;
  baseOne: { image: PaddleGatsbyImageType };
  baseTwo: { image: PaddleGatsbyImageType };
  baseThree: { image: PaddleGatsbyImageType };
  topOne: { image: PaddleGatsbyImageType };
  topTwo: { image: PaddleGatsbyImageType };
  topThree: { image: PaddleGatsbyImageType };
};
export const PaddlePurchase = ({ id, title, slug, excerpt, length, width, inflatable, capacity, demo, discount, cutout, sportSlug, brandSlug, baseOne, baseTwo, baseThree, topOne, topTwo, topThree }: purchaseTypes) => {

  return (
    <article key={id} className="purchase">
      <div className="purchase-collage">

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
          {cutout && (
            <GatsbyImage
              image={cutout.localFile?.childImageSharp?.gatsbyImageData}
              alt={cutout.alternativeText || `${title} by ${brandSlug}`}
              className="cutout"
              objectFit="contain"
            />
          )}
        </Link>
        <Badges
          inflatable={inflatable}
          demo={demo}
          discount={discount}
        />
      </div>
      <h4 className="purchase__title">
        <Link to={`/retail/${sportSlug}/${brandSlug}/${slug}`}>{title}</Link>
      </h4>
      <hr />
      <p>{excerpt}</p>
      <hr />
      <div className="purchase__details">
        <h4>
          <PaddleInchesRemainder inches={length} />
          long by {width}" wide
        </h4>
        <h5 className="capitalize">Capacity {capacity}&thinsp;lbs</h5>
      </div>
    </article>
  )
}