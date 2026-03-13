// TODO: this looks better than what is impleneted

import React from "react";
import { faker } from "@faker-js/faker";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { Composition } from "./Composition";
import { SunsetTourTimes } from "./SunsetTourTimes";
import { BookNow } from "./BookNow";
import { Flight } from "./Flight";

export const TourPage = () => {
  return (
    <>
      <Header />

      <div className="panel">
        <div className="albatross wrap">
          <main>
            <div className="flex-row-wrap">
              <h1>{faker.animal.bear()}</h1> <BookNow />
            </div>
            <p>{faker.lorem.sentence()}</p>

            {/* <Specs /> */}
            {Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(
              () => (
                <div key={faker.string.uuid()} className="spec">
                  <h2>{faker.animal.bird()}</h2>
                  {/* // TODO: more units */}
                  <h3>{faker.number.int({ min: 1, max: 100 })}</h3>
                </div>
              ),
            )}
            <SunsetTourTimes />
          </main>
          {/* // ? this is wrapping down rather than across */}
          <Composition />
        </div>
      </div>

      <section className="aconcagua-padding-block">
        <div className="pelican">
          <h3>Other Tours</h3>
          <p>
            <a href={faker.airline.flightNumber()}>
              Compare the {faker.animal.bear()} to another tour
            </a>
          </p>
        </div>
        <Flight />
      </section>

      <div className="panel">
        <Breadcrumbs />
      </div>
      <Footer />
    </>
  );
};
