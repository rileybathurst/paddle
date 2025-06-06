// ? is this margin-block-end its a single thing

// this is the Name.tsx file
import React from 'react';

interface DropProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Drop = ({
  primary = false,
  ...props
}: DropProps) => {

  return (
    <div
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
      {/*       .everest-block-end {
  margin-block-end: var(--everest);
}

.aconcagua-block-end {
  margin-block-end: var(--aconcagua);
}

.denali-block-end {
  margin-block-end: var(--denali);
}

.kilimanjaro-block-end {
  margin-block-end: var(--kilimanjaro);
}

.elbrus-block-end {
  margin-block-end: var(--elbrus);
}

.vinson-block-end {
  margin-block-end: var(--vinson);
}

.kosciuszko-block-end {
  margin-block-end: var(--kosciuszko);
}

.zero-block-end {
  margin-block-end: 0;
} */}


    </div>
  );
};