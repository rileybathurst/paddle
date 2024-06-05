// import * as React from "react"

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
      key: timeframe,
      unit: 'timeframe'
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

    const finishHours = finish.split(':')[0];
    let finishHoursInt: number = Number.parseInt(finishHours);
    const finishMins = finish.split(':')[1];
    const finishMinsInt: number = Number.parseInt(finishMins);
    const finishAmpm = finishHoursInt >= 12 ? 'pm' : 'am';

    if (finishHoursInt > 12) {
      finishHoursInt = finishHoursInt - 12;
    }

    return {
      key: `${startHoursInt}${startMinsInt > 0 ? `:${startMinsInt}:${hairSpace}` : ''}${hairSpace}${startAmpm}
      - 
      ${finishHoursInt}${finishMinsInt > 0 ? `:${finishMinsInt}${hairSpace}` : ''}${hairSpace}${finishAmpm}`,
      unit: "time"
    }
  }

  if (duration) {
    if (duration > 90) {
      const hours = Math.floor(duration / 60);
      const mins = duration % 60;

      return {
        key: `${hours}${hairSpace}hrs ${mins > 0 ? `${mins}${hairSpace}mins` : ''}`,
        unit: "duration"
      }
    }

    return {
      key: `${duration}${hairSpace}mins`,
      unit: "duration"
    }
  }

  return {
    key: null,
    unit: null
  }
}