// this is the Name.tsx file
import React from 'react';

interface TopBarProps {
  primary?: boolean;
  onClick?: () => void;
}

export const TopBar = ({
  primary = false,
  ...props
}: TopBarProps) => {

  return (
    <div className="top-bar" >
      <p>We&apos;re Open for the 2024 Summer</p>
    </div>
  );
};