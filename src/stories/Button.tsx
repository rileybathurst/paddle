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
      <button className='button__mullen' type='button'>Button Mullen</button>
      <button className='button__mullen--hover' type='button'>Mullen Hover</button>
      <button className='button__mullen--active' type='button'>Mullen Active</button>
      <p>// TODO: I have some problems with this I dont like the pink</p>
    </main>
  );
};