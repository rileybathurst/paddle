import * as React from "react";
import { PaddleLocation } from "./paddle-location";
import type { PaddleLocationTypes } from "./types/paddle-location-types";
import type { PaddleLocalesTypes } from "./types/paddle-locales-type";

export const PaddleLocationDeck = ({
  single,
  nodes,
  season_start,
  season_end,
  phone
}: PaddleLocalesTypes) => {

  if (nodes) {
    return (
      <section className="locales">
        {nodes.map((location: PaddleLocationTypes) => (
          <PaddleLocation
            key={location.id}
            {...location}
            season_start={season_start}
            season_end={season_end}
            phone={phone}
          />
        ))}
      </section>
    );
  } else if (single) {
    return (
      <section className="locales">
        <PaddleLocation
          key={single.id}
          {...single}
          season_start={season_start}
          season_end={season_end}
          phone={phone}
        />
      </section>
    );
  }

  return null;
};
