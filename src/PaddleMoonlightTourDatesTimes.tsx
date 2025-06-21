import * as React from "react"
// import { PaddleTime } from "./PaddleTime"

type PaddleMoonlightTourDatesTimesTypes = {
  seasonStart: string
  seasonEnd: string
  nodes: {
    id: string;
    date: string;
    start: string;
    finish: string;
  }[];
}
export const PaddleMoonlightTourDatesTimes = ({ seasonStart, seasonEnd, nodes }: PaddleMoonlightTourDatesTimesTypes) => {
  const currentDate = new Date();
  if (currentDate > new Date(seasonEnd)) {

    // console.log('its past the end of the season');
    const futureTours = nodes.filter(tour => new Date(tour.date) >= currentDate);
    // console.log(futureTours);

    if (futureTours.length > 0) {
      return (
        <>
          <h3>Next season tours</h3>
          {futureTours.map((tour) => (
            <p key={tour.id}>
              {new Date(tour.date).toLocaleDateString('en-US', {
                timeZone: 'UTC',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}&nbsp;-&nbsp;
              {/* <PaddleTime start={tour.start} finish={tour.finish} /> */}
              tour.start - tour.finish
            </p>
          ))}
        </>
      )
    }
  }

  return (
    <div>
      <h3>Moonlight Tour Dates</h3>
      <ul>
        {nodes.map((tour) =>
          <li key={tour.id}>
            {/* // TODO: superfluous to have an element that could just be a class */}
            <h4>
              {new Date(tour.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}&nbsp;-&nbsp;
              {/* <PaddleTime start={tour.start} finish={tour.finish} /></h4> */}
              tour.start - tour.finish
            </h4>
          </li>
        )}
      </ul>
    </div>
  )
}