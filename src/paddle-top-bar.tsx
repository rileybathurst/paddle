import * as React from "react";
import Markdown from "react-markdown";

// TODO this would be nice to be able to close but I dont have it right yet
type PaddleTopBarTypes = {
  strapiBranch: {
    topbar: {
      data: {
        topbar: string;
      }
    }
  };
}
export const PaddleTopBar = ({ strapiBranch }: PaddleTopBarTypes) => {

  /* // TODO: move to weather day
  const RainCheckDate = new Date(strapiBranch.RainCheck);
  const currently = new Date(); */

  return (
    <div className='top-bar'>
      {/* {RainCheckDate > currently ? (
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
          &nbsp;{strapiBranch.RainCheckReason}
        </p>
      ) : RainCheckDate.toDateString() === currently.toDateString() ? (
        <p className="rain-check">
          <span className="rain-check-date">{RainCheckDate.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          })}</span>&nbsp;
          <span className="rain-check-reason">We're closed today due to {strapiBranch.RainCheckReason}</span>
        </p>
      ) : ( */}
        <Markdown>
          {strapiBranch.topbar.data.topbar}
        </Markdown>
      {/* )
      } */}
    </div>
  )
}