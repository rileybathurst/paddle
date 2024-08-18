// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import FacebookIcon from '../assets/facebook-icon';
import InstagramIcon from '../assets/instagram-icon';
import TripadvisorIcon from '../assets/tripadvisor-icon';

export const Socials = () => {

  return (
    <main className="social">
      {/* // TODO: boolean check on socials */}
      {/* {useSiteMetadata().social?.facebook ?? */}
      <a
        href={faker.location.city()}
        target='_blank' rel='noopener noreferrer'
        aria-label={`${faker.location.city()} facebook`}
      >
        <FacebookIcon />
      </a>
      {/* } */}
      {/* {useSiteMetadata().social?.instagram ?? */}
      <a href={faker.location.city()}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${faker.location.city()} instagram`}
      >
        <InstagramIcon />
      </a>
      {/* } */}
      {/* {useSiteMetadata().social?.instagram ?? */}
      <a href={faker.location.city()}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${faker.location.city()} tripadvisor`}
      >
        <TripadvisorIcon />
      </a>
      {/* } */}
    </main>
  );
};