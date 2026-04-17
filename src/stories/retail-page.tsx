// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Deck } from './deck';

export const RetailPage = () => {

  return (
    <>
      <Header />
      <main className="albatross wrap">
        <div className='condor'>
          <h1>Retail Page</h1>
        </div>
      </main>

      {/* // TODO: specify the retail card */}
      <Deck />

      <Footer />
    </>
  );
};