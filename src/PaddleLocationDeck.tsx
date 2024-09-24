import * as React from "react"
import { PaddleLocationCard } from "./PaddleLocationCard";
import type { LocationCardTypes } from "./types/location-card-types";

interface LocationDeckTypes {
  background?: string;
  season_start?: string;
  season_end?: string;
  nodes: LocationCardTypes[];
}
export function PaddleLocationDeck({ nodes, season_start, season_end, background }: LocationDeckTypes) {

  return (
    <section className="location-deck">
      {nodes.map((location: LocationCardTypes) => (
        <PaddleLocationCard
          key={location.id}
          {...location}
          background={background}
          season_start={season_start}
          season_end={season_end}
        />
      ))}
    </section>
  )
}