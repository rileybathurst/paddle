// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-aria-components';

interface LinksProps {
  primary?: boolean;
  location?: 'tahoe-city' | 'south-tahoe';
  onClick?: () => void;
}

export const Links = ({
  primary = false,
  location = 'tahoe-city',
  ...props
}: LinksProps) => {

  return (
    <main
      {...props}
      className={location}
    >
      <Link href={faker.location.city()}>{faker.location.city()}</Link><br />
      <Link href={faker.location.city()} className={`link__backed ${primary ?? 'hover'}`}>{faker.location.city()} Backed</Link>
      {/* {primary ? 'primary' : 'secondary'} */}
    </main>
  );
};