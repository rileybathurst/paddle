// this is the Name.tsx file
import React from 'react';

interface PanelsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Panels = ({
  primary = false,
  ...props
}: PanelsProps) => {

  return (
    <div
      {...props}
    >
      <div className='cloud'>
        something
      </div>
    </div>
  );
};