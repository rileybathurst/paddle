import * as React from "react"

// TODO: add the moonlight tour times to paddle just quick working here
type MoonlightTourDateTime = {
  seasonStart: string;
  seasonEnd: string;
  nodes: {
    id: React.Key;
    date: string;
    start: string;
    finish: string;
  }[];
};

const Time = ({ string }: { string?: string }) => {
  const dateStr = new Date().toISOString().split("T")[0];
  return (
    new Date(`${dateStr}T${string}`).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    })
  );
};

type DateTimeFormatTypes = {
  date: string;
  start: string;
  finish: string;
};
const Formatter = ({ date, start, finish }: DateTimeFormatTypes) => {
  return (
    <>
      {new Date(date).toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      &nbsp;-&nbsp;
      <Time string={start} />
      &nbsp;-&nbsp;
      <Time string={finish} />
    </>
  );
};

const DateTimeFormat = ({
  date,
  start,
  finish
}: {
  date: string;
  start: string;
  finish: string;
}) => {

  const hasPassed = new Date(date) < new Date();
  
  return (
    <p>
      {hasPassed ? <s>
      <Formatter 
        date={date}
        start={start}
        finish={finish}
      />
    </s> : 
      <Formatter 
        date={date}
        start={start}
        finish={finish}
      />
        }
    </p>
  );
};

export const PaddleMoonlightDatesTime = ({
  seasonEnd,
  nodes,
}: MoonlightTourDateTime) => {

  const currentDate = new Date();
  if (currentDate > new Date(seasonEnd)) {

    const futureTours = nodes.filter(
      (tour) => new Date(tour.date) >= currentDate,
    );

    if (futureTours.length > 0) {
      return (
        <>
          <h3>Next season tours</h3>
          {futureTours.map((future) => (
            <DateTimeFormat
              key={future.id}
              date={future.date}
              start={future.start}
              finish={future.finish}
            />
          ))}
        </>
      );
    }
  }

  // TODO: strike through after the date has passed
  return (
    <div>
      <h3>Moonlight Tour Dates</h3>
      <ul>
        {nodes.map((moonlight) => (
          <DateTimeFormat
            key={moonlight.id}
            date={moonlight.date}
            start={moonlight.start}
            finish={moonlight.finish}
          />
        ))}
      </ul>
    </div>
  );
};