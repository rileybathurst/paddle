// this is the Name.tsx file
import React from 'react';

interface LanguageProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Language = ({
  primary = false,
  ...props
}: LanguageProps) => {

  return (
    <main
      {...props}
    >
      "Paddleboard is supposed to be one word" - Andy<br />
      "Double Kayak" - always used instead of Tandem<br />
    </main>
  );
};