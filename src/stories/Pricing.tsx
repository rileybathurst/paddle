// TODO: more faker work to do different numbers

// TODO: use faker to actually build this up
import React from 'react';
import { faker } from '@faker-js/faker';

const LineBreaker = ({ text }: { text: string; }) => {
  text = text.trim();

  // * dont break a single word, it returns the word twice on two lines, which is not what we want
  if (!text.includes(" ")) {
    return <h4 className="title">{text}</h4>;
  }

  const splitIndex = (() => {
    const spaceIndexes = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") spaceIndexes.push(i);
    }
    if (spaceIndexes.length === 0) return -1;
    let minDiff = Infinity;
    let bestIndex = spaceIndexes[0];
    for (const idx of spaceIndexes) {
      const left = text.slice(0, idx).length;
      const right = text.slice(idx + 1).length;
      const diff = Math.abs(left - right);
      if (diff < minDiff) {
        minDiff = diff;
        bestIndex = idx;
      }
    }
    return bestIndex;
  })();

  const firstPart = text.slice(0, splitIndex);
  const secondPart = text.slice(splitIndex + 1);

  return (
    <h4 className="title">
      {firstPart}
      <br />
      {secondPart}
    </h4>
  );
}


export const Pricing = ({ demos }: { demos?: boolean }) => {
  const repeatedLength = faker.number.int({ min: 1, max: 5 });

  return (
    <div className="pricing-chart">
      <div className="column">
        <a href={faker.internet.url()}>
          <LineBreaker text="Rental Rates" />
        </a>
        {Array.from({ length: repeatedLength }).map(() => {
          const hours = faker.number.int({ min: 1, max: 8 });

          return (
            <p>{faker.datatype.boolean() ? `${hours} Hour${hours === 1 ? "" : "s"}` : "Full Day"}</p>
          );
        })}
      </div>

      {Array.from({ length: repeatedLength }).map(() => (
        <div className="column">
          <LineBreaker text={faker.commerce.productName()} />
          {Array.from({ length: repeatedLength }).map(() => (
            <p>${faker.number.int({ min: 9, max: 999 })}</p>
          ))}
        </div>
      ))
      }
    </div>
  );
};