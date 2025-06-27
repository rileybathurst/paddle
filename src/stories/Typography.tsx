// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";

export const Typography = () => {
  return (
    <>
      <p>
        {faker.lorem.sentence()}
        <del>{faker.lorem.word()}</del>
        {faker.lorem.sentence()}
      </p>

      {/* currently done with the markdown file */}
      <h1>everest</h1>
      <h2>aconcagua</h2>
      <h3>denali</h3>
      <h4>kilimanjaro</h4>
      <h5>elbrus</h5>
      <h6>vinson</h6>
      <p>kosciuszko</p>
    </>
  );
};
