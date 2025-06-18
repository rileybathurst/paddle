// this is the Name.tsx file
import React from 'react';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  ...props
}: ButtonProps) => {

  return (
    <main
      {...props}
    >
      <button type='button'>Button</button>
      <br />
      <button className='button__hover' type='button'>Hover</button>
      <br />
      <button className='button__active' type='button'>Active</button>
    </main >
  );
};