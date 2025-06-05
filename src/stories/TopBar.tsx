// this is the Name.tsx file
import React from 'react';

type TopBarTypes = {

  RainCheck?: string;
  RainCheckDate?: Date;
  RainCheckReason?: string;
};

export const TopBar = ({

  RainCheck = '2025-05-13T02:14:37Z',
  RainCheckReason = 'Snow Storm',
}: TopBarTypes) => {

  const RainCheckDate = new Date(RainCheck);
  const currently = new Date();

  return (
    <div className='top-bar'>

      {RainCheckDate > currently ? (
        <p className="rain-check">
          <span className="rain-check-date">
            {RainCheckDate.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
            })}
          </span>
          &nbsp;We will be closing at&nbsp;
          <span className="rain-check-time">
            {RainCheckDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })} due to an incoming</span>
          &nbsp;{RainCheckReason}
        </p>
      ) : RainCheckDate.toDateString() === currently.toDateString() ? (
        <p className="rain-check">
          <span className="rain-check-date">{RainCheckDate.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          })}</span>&nbsp;
          <span className="rain-check-reason">We're closed today due to {RainCheckReason}</span>
        </p>
      ) : (
        <p>We&apos;re Open for the 2024 Summer</p>
      )
      }
    </div>
  );
};