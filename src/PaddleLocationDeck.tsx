import * as React from "react"
import PaddleLocationCard from "./PaddleLocationCard";
import type { LocationCardTypes } from "./types/location-card-types";

interface LocationDeckTypes {
  background?: string;
  nodes?: LocationCardTypes[];
}

function LocationDeck({ background, nodes }: LocationDeckTypes) {
  if (!nodes) return null;
  return (
    <section className="location-deck">
      {nodes.map((location: LocationCardTypes) => (
        <PaddleLocationCard
          key={location.id}
          {...location}
          background={background}
        />
      ))}
    </section>
  )
}

export default LocationDeck
