// this is the Name.tsx file
import React from 'react';

function ColorCards({ color, variables }) {
  return (
    <div>
      <h2>{color}</h2>
      {variables.map((variable) => (
        <div
          key={variable}
          style={{
            backgroundColor: `var(--${color}-${variable})`,
            padding: '1rem',
            margin: '1rem',
            borderRadius: '0.5rem',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {`--${color}-${variable}`}
        </div>
      ))}
    </div>
  );
}

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
        color="navy"
        variables={[100, 200]}
      />
    </main>
  );
};