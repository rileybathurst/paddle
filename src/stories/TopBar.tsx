// this is the Name.tsx file
import React from 'react';

type TopBarTypes = {
  location?: 'tahoe-city' | 'south-tahoe';
};

export const TopBar = ({
  location = 'tahoe-city',
}: TopBarTypes) => {

  return (
    <div className={`${location} top-bar`}>
      <p>We&apos;re Open for the 2024 Summer</p>
    </div >
  );
};