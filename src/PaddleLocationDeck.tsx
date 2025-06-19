import * as React from "react"
import { PaddleLocationCard } from "./PaddleLocationCard";
import type { PaddleLocationCardTypes } from "./types/location-card-types";

interface LocationDeckTypes {
  background?: string;
  season_start?: string; // ? should this be optional? it created a problem with tours
  season_end?: string;
  phone?: string;
  nodes: PaddleLocationCardTypes[];
}
export function PaddleLocationDeck({ nodes, season_start, season_end, phone, background }: LocationDeckTypes) {

  return (
    <section className="location-deck">
      {nodes.map((location: PaddleLocationCardTypes) => (
        <PaddleLocationCard
          key={location.id}
          {...location}
          background={background}
          season_start={season_start}
          season_end={season_end}
          phone={phone}
        />
      ))}
    </section>
  )
}