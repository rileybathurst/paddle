// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";

export const Typography = () => {
  return (
    <>

      {/* currently done with the markdown file */}
      <h1>everest</h1>
      <h1>{faker.lorem.sentence()}</h1>
      <hr />
      <h2>aconcagua</h2>
      <h2>{faker.lorem.sentence()}</h2>
      <hr />
      <h3>denali</h3>
      <h3>{faker.lorem.sentence()}</h3>
      <hr />
      <h4>kilimanjaro</h4>
      <h4>{faker.lorem.sentence()}</h4>
      <hr />
      <h5>elbrus</h5>
      <h5>{faker.lorem.sentence()}</h5>
      <hr />
      <h6>vinson</h6>
      <h6>{faker.lorem.sentence()}</h6>
      <hr />
      <p>kosciuszko</p>

      <hr />

      <h2>Del</h2>
      <p>
        {faker.lorem.sentence()}
        &nbsp;<del>{faker.lorem.word()}</del>&nbsp;
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


      <h3>React Markdown</h3>
      <div className='react-markdown'>
        <h3>denali - {faker.lorem.sentence()}</h3>
        <p>{faker.lorem.paragraph()}</p>
        <ul className='list-style-disc'>
          {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => (<li>{faker.lorem.sentence()}</li>))}
        </ul>
      </div>
    </>
  );
};
