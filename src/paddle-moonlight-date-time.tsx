import * as React from "react"

type MoonlightTourDateTime = {
  nodes: {
    id: React.Key;
    date: string;
    start: string;
    finish: string;
  }[];
};

const Time = ({ string }: { string?: string }) => {
  const dateStr = new Date().toISOString().split("T")[0];
  return new Date(`${dateStr}T${string}`).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};

export const PaddleMoonlightDatesTimes = ({ nodes }: MoonlightTourDateTime) => (
  <div>
    <h3>Moonlight Tour Dates</h3>
    <ul>
      {nodes.map(({ id, date, start, finish }) => {
        const hasPassed = new Date(date) < new Date();
        const content = (
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
        return (
          <li key={id}>
            {hasPassed ? <s>{content}</s> : content}
          </li>
        );
      })}
    </ul>
  </div>
);