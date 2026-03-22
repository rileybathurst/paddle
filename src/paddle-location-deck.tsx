import * as React from "react";
import { PaddleLocation } from "./paddle-location";
import type { PaddleLocationTypes } from "./types/paddle-location-types";
import type { PaddleLocationDeckTypes } from "./types/paddle-location-deck-types";

export const PaddleLocationDeck = ({
  single,
  nodes,
  season_start,
  season_end,
  phone
}: PaddleLocationDeckTypes) => {

  if (nodes) {
  return (
    <section className="location-deck">
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
      <section className="location-deck">
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
