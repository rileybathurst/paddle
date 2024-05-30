// this is the Name.tsx file
import React from 'react';

interface CompositionProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Composition = ({
  primary = false,
  ...props
}: CompositionProps) => {

  return (
    <div className="composition">
      {/* <WaterTexture className="texture-1" /> */}
      {/* <TopThree className="texture-2 img__wrapped" /> */}
      {/* {sport === 'paddleboard' ? <Supper className="paddler" /> : <Kayaker className="paddler" />} */}
    </div>
  );
};