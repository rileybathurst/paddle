// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { faker } from '@faker-js/faker';

interface Four0FourProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Four0Four = ({
  primary = false,
  ...props
}: Four0FourProps) => {

  return (
    <div
      {...props}
    >
      <Header />
      <main className="pelican">
        <h1>404 {faker.datatype.boolean() ? (
          <>
            - {faker.music.album()}
          </>
        ) : null}
        </h1>

        <h2 className="">Looks like you&apos;ve paddled into uncharted waters!</h2>
        <p>Don&apos;t worry, we&apos;ll help you navigate <a href="/">back to our homepage.</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};