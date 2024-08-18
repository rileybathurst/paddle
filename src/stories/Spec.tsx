// this is the Name.tsx file
import React from 'react';
import { faker } from '@faker-js/faker';

interface Spec3Types {
  crew: string;
  capacity: {
    data: number;
    unit: string;
  };
  test?: {
    data: string;
    unit: string;
  };
  length?: {
    data: number;
    unit: string;
  };
}
function Spec3({ crew, capacity, test, length }: Spec3Types) {

  console.log(crew);
  console.log(capacity);

  return (
    Object.entries({ crew, capacity, test, length }).map(([key, value]) => {

      // console.log(value);
      // this is maybe where you can use generics to get around this check

      // or if the next capacity data is a string
      // so you create a string here from the object

      if (typeof value !== 'string' && key && value) {

        // console.log('🦖');

        // * works but cant be type safe
        // ? i guess you could wrap it in a typeof check
        // so this is getting kinda ugly
        if (key === 'length' && typeof value.data === 'number') {
          return (
            <section key={key}>
              {/* <h3>{key} - <Remainder inches={value.data} /></h3> */}
            </section>
          )
        }

        const combinedDataUnit = `${value.data} ${value.unit}`;
        return (
          <section key={key}>
            <h3>{key} - {combinedDataUnit}</h3>
          </section>
        )
      }

      if (key && value) {

        // console.log('🦄');

        return (
          <section key={key}>
            {/* <h3>{key} - {value}</h3> */}
          </section>
        )
      }

      return (
        <section key={key}>
          <h3>{key}</h3>
        </section>
      );
    })
  );
}

export const Spec = () => {

  return (
    <main>
      <Spec3
        crew={faker.helpers.arrayElement(['single', 'double'])}
        capacity={{ data: faker.number.int(100), unit: "lbs" }}
      />
    </main>
  );
};