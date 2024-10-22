//  trying to figure out colors I dont know if this will work

// this is the Name.tsx file
import React from 'react';

function ForestLoop({ layers }: { layers: string[] }) {
  return (
    layers.map((layer) => (
      <div
        key={layer}
        className={layer}
      >
        {layer}
      </div>
    ))
  );
}

interface ForestProps {
  primary?: boolean;
  location?: 'tahoe-city' | 'south-tahoe';
  onClick?: () => void;
}

export const Forest = ({
  primary = false,
  location = 'tahoe-city',
  ...props
}: ForestProps) => {

  return (
    <main
      {...props}
      className={`${location} forest`}
    >
      <ForestLoop
        layers={['floor', 'understory', 'canopy', 'emergent']}
      />
    </main>
  );
};