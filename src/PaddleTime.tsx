// import * as React from "react"

import { en } from "@faker-js/faker";

interface TimeTypes {
  start?: string | null;
  finish?: string | null;
  duration?: number | null;
  timeframe?: string | null;
}
export const PaddleTime = ({ start, finish, duration, timeframe }: TimeTypes) => {

  // TODO: sunset is a whole thing

  const hairSpace = String.fromCharCode(0x200A);

  if (timeframe) {
    return {
      // key: timeframe, cant return key its a react special prop
      // https://react.dev/warnings/special-props
      entry: timeframe,
      value: 'timeframe'
    }
  }

  if (start && finish) {

    const startHours = start.split(':')[0];
    let startHoursInt: number = Number.parseInt(startHours);
    const startMins = start.split(':')[1];
    const startMinsInt: number = Number.parseInt(startMins);
    const startAmpm = startHoursInt >= 12 ? 'pm' : 'am';

    if (startHoursInt > 12) {
      startHoursInt = startHoursInt - 12;
    }

    console.log(startMinsInt);

    const finishHours = finish.split(':')[0];
    let finishHoursInt: number = Number.parseInt(finishHours);
    const finishMins = finish.split(':')[1];
    const finishMinsInt: number = Number.parseInt(finishMins);
    const finishAmpm = finishHoursInt >= 12 ? 'pm' : 'am';

    if (finishHoursInt > 12) {
      finishHoursInt = finishHoursInt - 12;
    }

    return {
      entry: startHours === '12' ? 'noon' : `${startHoursInt}${startMinsInt > 0 ? `:${startMinsInt}${hairSpace}` : ''}${startAmpm}
      -
      ${finishHours === '12' ? 'noon' : `${finishHoursInt}${finishMinsInt > 0 ? `:${finishMinsInt}${hairSpace}` : ''}${hairSpace}${finishAmpm}`}`,
      value: "time"
    }
  }

  if (duration) {
    if (duration > 90) {
      const hours = Math.floor(duration / 60);
      const mins = duration % 60;

      return {
        entry: `${hours}${hairSpace}hrs ${mins > 0 ? `${mins}${hairSpace}mins` : ''} `,
        value: "duration"
      }
    }

    return {
      entry: `${duration}${hairSpace} mins`,
      value: "duration"
    }
  }

  return {
    entry: null,
    value: null
  }
}