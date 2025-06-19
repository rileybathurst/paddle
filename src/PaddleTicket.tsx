import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import type { PaddleTicketTypes } from "./types/ticket-types"
import { PaddleTime } from "./PaddleTime"
import { PaddleBookNow } from "./PaddleBookNow"

export function PaddleTicket({ ogimage, slug, name, start, finish, duration, timeframe, fitness, excerpt, price, peek, peek_tours_fall_back, tour_page, allStrapiSunsetTourTime, strapiLocaleName }: PaddleTicketTypes) {

  const time = PaddleTime({
    start: start,
    finish: finish,
    duration: duration,
    timeframe: timeframe,
    allStrapiSunsetTourTime: allStrapiSunsetTourTime,
    allStrapiMoonlightTourDateTime: { nodes: [] }, // Provide an empty nodes array or the correct data as needed
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
      <div className='ticket__header'>
        <h4 className="card__title">
          <Link to={`/${tour_page}/${slug}`}>
            {name}
          </Link>
        </h4>
        
        <div className='ticket__money'>
        <h5>${price}</h5>
        <PaddleBookNow
          peek_base={peek || peek_tours_fall_back}
          strapiLocaleName={strapiLocaleName}
        />
        </div>
      </div>

      <div className="ticket__specs">
        {/* // TODO: heavy handed but once the backup is there we can work on this */}
        {/* // TODO: I'd like a spec backup here */}

        {slug !== '2hour' && slug !== '3hour' ? (
          <>
            <h4>{time.entry}</h4>
            {fitness ? <h4 className="capitalize">{fitness} <span>Fitness</span></h4> : null}
          </>
        ) : null }
      <p>{excerpt}</p>
      </div>

    </section>
  )
}