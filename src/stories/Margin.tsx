// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface MarginProps {
  primary?: boolean;
  onClick?: () => void;
}

type BlockTypes = {
  directions?: string[];
  variables?: string[];
};

const Block = ({ directions, variables }: BlockTypes) => (
  directions?.map((dir) => (
    <section>
      {variables?.map((variable) => (
        <div
          key={faker.string.uuid()}
          className={`${variable}-margin-block-${dir}`}
          style={{
            backgroundColor: `var(--neutral-300)`
          }}
        >
          {variable}-block-{dir}
        </div>
      ))}
    </section>
  ))
);

export const Margin = ({
  primary = false,
  ...props
}: MarginProps) => {

  return (
    <div
      {...props}
    >
      <Block directions={['start', 'end']} variables={['everest', 'aconcagua', 'denali', 'kilimanjaro', 'elbrus', 'vinson', 'kosciuszko', 'zero']} />
    </div>
  );
};