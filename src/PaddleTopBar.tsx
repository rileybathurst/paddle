import * as React from "react";

// TODO this would be nice to be able to close but I dont have it right yet

type PaddleTopBarTypes = {
  strapiLocale: {
    topbar: {
      data: {
        topbar: string;
      }
    }
    RainCheck: string;
    RainCheckDate: Date;
    RainCheckReason: string;
  };
}
export const PaddleTopBar = ({ strapiLocale }: PaddleTopBarTypes) => {

  const RainCheckDate = new Date(strapiLocale.RainCheck);
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
          &nbsp;{strapiLocale.RainCheckReason}
        </p>
      ) : RainCheckDate.toDateString() === currently.toDateString() ? (
        <p className="rain-check">
          <span className="rain-check-date">{RainCheckDate.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          })}</span>&nbsp;
          <span className="rain-check-reason">We're closed today due to {strapiLocale.RainCheckReason}</span>
        </p>
      ) : (
        <p>We&apos;re Open for the 2024 Summer</p>
      )
      }
    </div>
  )
}