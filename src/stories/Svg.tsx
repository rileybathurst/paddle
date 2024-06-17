// this is the Name.tsx file
import React from 'react';

import FacebookIcon from '../assets/facebook-icon';

interface SvgProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Svg = ({
  primary = false,
  ...props
}: SvgProps) => {

  return (
    <main
      {...props}
    >
      <FacebookIcon />
    </main>
  );
};