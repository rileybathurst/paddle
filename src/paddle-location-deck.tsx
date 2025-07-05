import * as React from "react";
import { PaddleLocationCard } from "./paddle-location-card";
import type { PaddleLocationCardTypes } from "./types/paddle-location-card-types";
import type { PaddleLocationDeckTypes } from "./types/paddle-location-deck-types";

export const PaddleLocationDeck = ({
  nodes,
  season_start,
  season_end,
  phone
}: PaddleLocationDeckTypes) => {
  return (
    <section className="location-deck">
      {nodes.map((location: PaddleLocationCardTypes) => (
        <PaddleLocationCard
          key={location.id}
          season_start={season_start}
          season_end={season_end}
          phoneNumber={phone}
          {...location}
        />
      ))}
    </section>
  );
};
