import * as React from "react"

type MoonlightTourDateTime = {
  nodes: {
    id: React.Key;
    date: string;
    start: string;
    finish: string;
  }[];
};

const getDisplayYear = (nodes: MoonlightTourDateTime["nodes"]) => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const hasUpcomingCurrentYearDate = nodes.some(({ date }) => {
    const parsedDate = new Date(date);
    return parsedDate.getFullYear() === currentYear && parsedDate >= now;
  });

  return hasUpcomingCurrentYearDate ? currentYear : currentYear - 1;
};

const Time = ({ string }: { string?: string }) => {
  const dateStr = new Date().toISOString().split("T")[0];
  return new Date(`${dateStr}T${string}`).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};

export const PaddleMoonlightDatesTimes = ({ nodes }: MoonlightTourDateTime) => {
  const displayYear = getDisplayYear(nodes);
  const nodesForDisplayYear = nodes.filter(({ date }) => {
    return new Date(date).getFullYear() === displayYear;
  });

  const formatDate = (date: string) =>
    (() => {
      const parsed = new Date(date);
      const weekday = parsed.toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "long",
      });
      const day = parsed.toLocaleDateString("en-US", {
        timeZone: "UTC",
        day: "2-digit",
      });
      const month = parsed.toLocaleDateString("en-US", {
        timeZone: "UTC",
        month: "long",
      });
      const year = parsed.toLocaleDateString("en-US", {
        timeZone: "UTC",
        year: "numeric",
      });

      return `${weekday} ${day} ${month}  ${year}`;
    })();

  return (
    <div>
      <h3>Moonlight Tour Dates</h3>
      <ul>{nodesForDisplayYear.map(({ id, date, start, finish }) => {
        const hasPassed = new Date(date) < new Date();
        return (
          <li key={id}>
            {hasPassed ? (
              <s>
                {formatDate(date)}&nbsp;-&nbsp;
                <Time string={start} />
                &nbsp;-&nbsp;
                <Time string={finish} />
              </s>
            ) : (
              <>
                {formatDate(date)}&nbsp;-&nbsp;
                <Time string={start} />
                &nbsp;-&nbsp;
                <Time string={finish} />
              </>
            )}
          </li>
        );
      })}</ul>
    </div>
  );
};