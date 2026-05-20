import * as React from "react"

const formatTimeTo12Hour = (timeValue: string) => {
  const [hoursRaw, minutesRaw = "00"] = timeValue.split(':');
  const hoursNum = Number(hoursRaw);
  const minutesNum = Number(minutesRaw);

  if (Number.isNaN(hoursNum) || Number.isNaN(minutesNum)) {
    return timeValue;
  }

  const normalizedHours = ((hoursNum % 24) + 24) % 24;
  const period = normalizedHours >= 12 ? "PM" : "AM";
  const displayHours = normalizedHours % 12 || 12;
  const displayMinutes = String(minutesNum).padStart(2, "0");

  return `${displayHours}:${displayMinutes} ${period}`;
}

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

      const formattedStartTime = formatTimeTo12Hour(time.startTime);
      const formattedEndTime = formatTimeTo12Hour(time.endTime);

      const isPassed = endDate < new Date();
      const timeRange = (
        <>
          {formattedStartTime}
          &nbsp;-&nbsp;
          {formattedEndTime}
        </>
      );

      return (
        <div key={time.id} className="date-time">
          <h4>Sunset Tour Times for {startDate.getFullYear()}</h4>

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
            {isPassed ? <del>{timeRange}</del> : timeRange}
          </p>
        </div>
      )
    })}
  </section>