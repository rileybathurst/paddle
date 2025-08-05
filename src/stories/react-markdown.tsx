// this is the Name.tsx file
import { faker } from '@faker-js/faker';
import React from 'react';

export const ReactMarkdown = () => {

  return (
    <div className='react-markdown'>
      <h2>paragraph</h2>
      <p>{faker.lorem.paragraphs()}</p>

      <h2>sentence</h2>
      <p>{faker.lorem.sentence()}</p>

      <h2>Lines</h2>
      <p>{faker.lorem.lines(2)}</p>


    </div>
  );
};