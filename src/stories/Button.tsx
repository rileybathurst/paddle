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
      {primary ? 'primary' : 'secondary'}
      <button type='button'>Button</button>
      <button className='button__hover' type='button'>Hover</button>
      <button className='button__active' type='button'>Active</button>
      <hr />
      <button className='button__ruby' type='button'>Button ruby</button>
      <button className='button__ruby--hover' type='button'>ruby Hover</button>
      <button className='button__ruby--active' type='button'>ruby Active</button>
      <p>{/* // TODO: I have some problems with this I dont like the pink */}</p>
    </main>
  );
};