// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";
import { Card } from "./card";

export const Deck = () => {
  return (
    <div className="deck">
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Card key={faker.string.uuid()} />
      ))}
    </div>
  );
};
