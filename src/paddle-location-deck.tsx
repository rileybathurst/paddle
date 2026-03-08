import * as React from "react";
import { PaddleLocation } from "./paddle-location";
import type { PaddleLocationTypes } from "./types/paddle-location-types";
import type { PaddleLocationDeckTypes } from "./types/paddle-location-deck-types";

export const PaddleLocationDeck = ({
  nodes,
  season_start,
  season_end,
  phone
}: PaddleLocationDeckTypes) => {
  
  // TODO: testing
  console.log("PaddleLocationDeck phone", phone);
  console.log(typeof phone);

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
};
