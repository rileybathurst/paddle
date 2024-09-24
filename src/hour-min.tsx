import * as React from "react"

interface HourMinTypes {
  time: string;
}
const HourMin = ({ time }: HourMinTypes) => {
  if (time) {
    const hoursString = time.split(':')[0];
    const mins = time.split(':')[1];

    let hoursInt = Number.parseInt(hoursString, 10);
    const ampm = hoursInt >= 12 ? 'pm' : 'am';

    /*     if (hoursInt < 10) {
          hoursDisplay = hoursInt.replace('0', '');
        } */

    if (hoursInt > 12) {
      hoursInt = hoursInt - 12;
    }

    return (
      <>{hoursInt}:{mins}{ampm}</>
    );
  }

  return null;

}

export default HourMin
