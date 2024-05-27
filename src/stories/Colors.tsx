// this is the Name.tsx file
import React from 'react';
import { ColorCards } from 'color-cards';

interface ColorsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Colors = ({
  primary = false,
  ...props
}: ColorsProps) => {

  return (
    <main
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
      <ColorCards
        color="red"
        variables={[100, 200]}
      />
    </main>
  );
};