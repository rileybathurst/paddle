import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PaddleInchesRemainder } from "./paddle-inches-remainder";
import { PaddleTextureBackgrounds } from "./paddle-texture-backgrounds";
import { PaddlePurchaseAndImageTypes } from "./types/paddle-purchase-image-types";

type BadgeTypes = Record<string, boolean | number | undefined>;

type BadgesProps = {
  badges: BadgeTypes;
};
const Badges = ({ badges }: BadgesProps) => {
  return (
    <>
      {Object.entries(badges).map(([key, value]) => {

        if (!value) {
          return null;
        }

        if (key === "discount" && typeof value === "number") {
          return (
            <div className="badge" key={key}>
              <h5 className="capitalize">{value}% off</h5>
            </div>
          );
        }

        if (value === true) {
          return (
            <div className="badge" key={key}>
              <h5 className="capitalize">{key}</h5>
            </div>
          );
        }

        return null;
      })}
    </>
  );
};


export const PaddlePurchase = ({
  id,
  title,
  slug,
  excerpt,
  length,
  width,
  inflatable,
  capacity,
  demo,
  discount,
  cutout,
  sport,
  brand,
  baseOne,
  baseTwo,
  baseThree,
  topOne,
  topTwo,
  topThree }: PaddlePurchaseAndImageTypes) => {

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
          to={`/retail/${sport.slug}/${brand.slug}/${slug}`}
          className="image-link"
        >
          {cutout && (
            <GatsbyImage
              image={cutout.localFile?.childImageSharp?.gatsbyImageData}
              alt={cutout.alternativeText || `${title} by ${brand.name}`}
              className="cutout"
              objectFit="contain"
            />
          )}
        </Link>

        {inflatable || demo || discount ? (
          <div className="badges">
            <Badges
              badges={{
                inflatable: inflatable,
                demo: demo,
            discount: discount
          }}
          />
          </div>
        ) : null}
        
      </div>
      <h4 className="purchase__title">
        <Link to={`/retail/${sport.slug}/${brand.slug}/${slug}`}>{title}</Link>
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