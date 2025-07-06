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
    {/* // TODO: stylize start with a storybook */}
    {/* // TODO: current */}
    <p>*We adapt the time of our sunset tour to the sun</p>
    {nodes.map((time) => {
      const startDate = new Date(time.startDate);
      const endDate = new Date(time.endDate);

      const startTimeSplit = time.startTime.split(':');
      const endTimeSplit = time.endTime.split(':');

      return (
        <div key={time.id}>
          <p>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
          <p>{startTimeSplit[0]}:{startTimeSplit[1]} - {endTimeSplit[0]}:{endTimeSplit[1]}</p>
        </div>
      )
    })}
  </section>