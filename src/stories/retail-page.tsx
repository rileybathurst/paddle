// this is the Name.tsx file
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const RetailPage = () => {

  return (
    <>
      <Header />
      <main className="albatross wrap">
        <div className='condor'>
          <h1>Retail Page</h1>
        </div>

      </main>

      <Footer />
    </>
  );
};