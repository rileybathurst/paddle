// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";
import { Purchase } from "./Purchase";

export const Bag = () => {
  return (
    <div className="bag">
      {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (
        <Purchase key={faker.string.uuid()} />
      ))}
    </div>
  );
};
