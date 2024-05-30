// this is the Name.tsx file
import React from 'react';

interface LinksProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Links = ({
  primary = false,
  ...props
}: LinksProps) => {

  return (
    <main
      {...props}
    >
      <a href="#">Link</a><br />
      <a href="#" className={`link__backed ${primary ?? 'hover'}`}>Link Backed</a>
      {primary ? 'primary' : 'secondary'}
    </main>
  );
};