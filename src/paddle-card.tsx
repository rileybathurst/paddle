import * as React from "react"
import { Link } from 'gatsby';
import { PaddleBookNow } from "./paddle-book-now";
import { GatsbyImage } from "gatsby-plugin-image";
import type { PaddleCardTypes } from "./types/paddle-card-types";

export const PaddleCard = ({ link, image, title, excerpt, paddleBookNow }: PaddleCardTypes) => {
  return (
    <article className='card'>
      <Link to={link} >
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText || title}
        />
        <h4>{title}</h4>
        <p>{excerpt}</p>
      </Link>

      {paddleBookNow && (
        <PaddleBookNow
          peek_base={paddleBookNow.peek_base}
          strapiBranchName={paddleBookNow.strapiBranchName}
          specificName={paddleBookNow.specificName}
          specificLink={paddleBookNow.specificLink}
        />
      )}
    </article>

  );
};
