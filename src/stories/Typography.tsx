// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";

export const Typography = () => {
  return (
    <>

      {/* currently done with the markdown file */}
      <h1>everest</h1>
      <h2>aconcagua</h2>
      <h3>denali</h3>
      <h4>kilimanjaro</h4>
      <h5>elbrus</h5>
      <h6>vinson</h6>
      <p>kosciuszko</p>

      <hr />

      <h2>Del</h2>
      <p>
        {faker.lorem.sentence()}
        <del>{faker.lorem.word()}</del>
        {faker.lorem.sentence()}
      </p>

      <hr />

      <h2>Ol</h2>
      <ol>
        <li>{faker.lorem.word()}</li>
        <li>{faker.lorem.word()}</li>
        <li>{faker.lorem.word()}</li>
      </ol>

      <hr />

      <h2>Ul</h2>
      <ul>
        <li>{faker.lorem.word()}</li>
        <li>{faker.lorem.word()}</li>
        <li>{faker.lorem.word()}</li>
      </ul>

    </>
  );
};
