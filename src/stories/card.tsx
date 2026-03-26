// new version of a simplified card can combine purchase and ticket
import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';
import { BookNow } from './BookNow';

export const Card = () => {

  return (
    <article className='card'>
      <Link href={faker.location.city()} >
        <img src={faker.image.urlPicsumPhotos()} alt={faker.lorem.words(2)} />
        <h4>{faker.location.city()}</h4>
        <p>{faker.lorem.sentences(2)}</p>
      </Link>
      {faker.datatype.boolean() && <BookNow />}
    </article>
  );
};