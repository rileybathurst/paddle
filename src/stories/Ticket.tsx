// TODO: when I have an internet connection
// this is the Name.tsx file
import React from 'react';
import { Link } from 'react-aria-components';
import { faker } from '@faker-js/faker';

interface TicketProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Ticket = ({
  primary = false,
  ...props
}: TicketProps) => {

  return (
    <section className="ticket">
      <Link href={`/tours/${faker.location.city()}`}>
        {/*         <GatsbyImage
          image={tour?.ogimage?.localFile?.childImageSharp?.gatsbyImageData}
          alt={`${tour?.ogimage?.alternativeText || tour.name} image`}
          objectFit="cover"
          className="card__image"
        /> */}
      </Link>
      <h4 className="card__title">
        <Link href={`/tours/${faker.location.city()}`}>
          {faker.location.city()}
        </Link>
      </h4>
      <div className="card__specs">
        {/* <Time
          start={tour.start}
          finish={tour.finish}
          duration={tour.duration}
        /> */}
        {/* {tour.fitness ? <h4 className="capitalize">{tour.fitness} <span>Fitness</span></h4> : null} */}
      </div>
      <hr />
      {/* <p>{tour.excerpt}</p> */}
      <hr />
      <div className="card__details">
        {/* <h5>${tour.price}</h5> */}
        <a
          href={faker.location.city()}
          className="book-now"
        >
          BOOK NOW
        </a>
      </div>

    </section>
  );
};