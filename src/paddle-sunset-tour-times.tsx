import * as React from "react"

type PaddleSunsetTourTimesTypes = {
  nodes: {
    id: React.Key;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
  }[];
}
export const PaddleSunsetTourTimes = ({ nodes }: PaddleSunsetTourTimesTypes) =>
  <section className="paddle-sunset-tour-times">
    <p>*We adapt the time of our sunset tour to the sun</p>
    {nodes.map((time) => {
      const startDate = new Date(time.startDate);
      const endDate = new Date(time.endDate);

      const startTimeSplit = time.startTime.split(':');
      const endTimeSplit = time.endTime.split(':');

      // Jan 26 - May 31
      // 20:1 - 5:17

      return (
        <div key={time.id} className="date-time">
          <h3 className="date elbrus">
            <strong>
              {startDate.toLocaleDateString("en-US", { month: "short" })}&nbsp;
            </strong>
            {startDate.toLocaleString("en-US", { day: "numeric" })}
            &nbsp;-&nbsp;
            <strong>
              {endDate.toLocaleDateString("en-US", { month: "short" })}&nbsp;
            </strong>
            {endDate.toLocaleString("en-US", { day: "numeric" })}
          </h3>
          <p className="time">
            {startTimeSplit[0]}:{startTimeSplit[1]}
            &nbsp;-&nbsp;
            {endTimeSplit[0]}:{endTimeSplit[1]}
          </p>
        </div>
      )
    })}
  </section>