import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import type { PaddleTicketTypes } from "./types/ticket-types"
import { PaddleTime } from "./PaddleTime"

export function PaddleTicket({ ogimage, slug, name, start, finish, duration, timeframe, fitness, excerpt, price, peek, peek_tours_fall_back, tour_page, allStrapiSunsetTourTime }: PaddleTicketTypes) {

  const time = PaddleTime({
    start: start,
    finish: finish,
    duration: duration,
    timeframe: timeframe,
    allStrapiSunsetTourTime: allStrapiSunsetTourTime,
    slug: slug
  });


  return (
    <section className="ticket">
      <Link to={`/${tour_page}/${slug}`}>
        <GatsbyImage
          image={ogimage?.localFile?.childImageSharp?.gatsbyImageData}
          alt={`${ogimage?.alternativeText || name} image`}
          objectFit="cover"
          className="card__image"
        />
      </Link>
      <h4 className="card__title">
        <Link to={`/${tour_page}/${slug}`}>
          {name}
        </Link>
      </h4>

      {/* // * heavy handed but once the backup is there we can work on this */}
      {slug !== '2hour' && slug !== '3hour' ?
        <div className="card__specs">
          <h4>{time.entry}</h4>
          {/* // TODO: I'd like a spec backup here */}
          {fitness ? <h4 className="capitalize">{fitness} <span>Fitness</span></h4> : null}
        </div>
        : null}
      <hr />
      <p>{excerpt}</p>
      <hr />
      <div className="card__details">
        <h5>${price}</h5>
        <a
          href={peek ? peek : peek_tours_fall_back}
          target="_blank"
          rel="noopener noreferrer"
          className="book-now"
        >
          BOOK NOW
        </a>
      </div>

    </section>
  )
}