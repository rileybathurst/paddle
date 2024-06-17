// this is the Name.tsx file
import React from 'react';

function WidthCard({ widths }) {
  return (
    <>
      {widths.map((width) => (
        <div
          style={{
            height: '100px',
            width: `var(--${width})`,
            backgroundColor: 'var(--mullen-300)',
            marginInline: 'auto',
            marginBlockEnd: '1rem',
            color: 'white',
          }}
        >
          {width}
        </div>
      ))}
    </>
  );
}

interface WidthsProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Widths = ({
  primary = false,
  ...props
}: WidthsProps) => {

  return (
    <>
      <h1>Widths</h1>
      <WidthCard widths={['vulture', 'stork', 'condor', 'pelican', 'albatross']} />
      <hr />
      <h2>split</h2>
      <p>pelican wrap</p>
      <div
        className='pelican wrap'
        style={{
          height: '100px',
          marginBlockEnd: '1rem',
          color: 'white',
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--mullen-300)',
          }}
        >
          wrap
        </div>
        <div
          style={{
            backgroundColor: 'var(--mullen-300)',
          }}
        >
          wrap
        </div>
      </div>
    </>
  );
};