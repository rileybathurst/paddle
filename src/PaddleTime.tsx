// import * as React from "react"

interface TimeTypes {
  start?: string;
  finish?: string;
  duration?: number;
  timeframe?: string;
  slug?: string;

  allStrapiSunsetTourTime: {
    nodes: {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
    }[];
  };

  allStrapiMoonlightTourDateTime: {
    nodes: {
      id: React.Key;
      date: string;
      start: string;
      finish: string;
    }[];
  };

}
export const PaddleTime = ({ start, finish, duration, timeframe, slug, allStrapiSunsetTourTime }: TimeTypes) => {

  // TODO: sunset is a whole thing
  const currentDate = new Date();
  let sunsetStartTime = '';
  let sunsetEndTime = '';

  if (slug === 'sunset') {
    allStrapiSunsetTourTime.nodes.map((time) => {
      const startDate = new Date(time.startDate);
      const endDate = new Date(time.endDate);


      if (startDate <= currentDate && currentDate <= endDate) {
        sunsetStartTime = time.startTime;
        sunsetEndTime = time.endTime;
      }
    })
  }

  const hairSpace = String.fromCharCode(0x200A);

  if (timeframe) {
    return {
      // key: timeframe, cant return key its a react special prop
      // https://react.dev/warnings/special-props
      entry: timeframe,
      value: 'timeframe'
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

  // this must be last as it has no way to be removed in strapi
  if (start && finish) {
    const startHours = sunsetStartTime ? sunsetStartTime.split(':')[0] : start.split(':')[0];
    let startHoursInt: number = Number.parseInt(startHours);
    const startMins = start.split(':')[1];
    const startMinsInt: number = Number.parseInt(startMins);
    const startAmpm = startHoursInt >= 12 ? 'pm' : 'am';

    if (startHoursInt > 12) {
      startHoursInt = startHoursInt - 12;
    }

    const finishHours = sunsetEndTime ? sunsetEndTime.split(':')[0] : finish.split(':')[0];
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

  return {
    entry: null,
    value: null
  }
}