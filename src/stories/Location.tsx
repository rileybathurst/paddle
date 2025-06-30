// this is the Name.tsx file
// TODO: these are way to similar for the reality of the design
import { faker } from "@faker-js/faker";
import React from "react";

export const Location = () => {
  return (
    // * phone boolean if has a phone link this has to be in multiple places to avoid a link on link error
    // * this has a phone
    faker.datatype.boolean() ? (
      <div className="location">
        <a
          href={faker.location.cardinalDirection()}
          rel="noopener noreferrer"
          title="Click to view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <title>{faker.location.city()}</title>
            {faker.helpers.arrayElement([true, false]) ? (
              // TODO: 1.3 add a few more of different sizes maybe component this
              <rect x="0" y="0" width="48" height="48" />
            ) : (
              <circle cx="24" cy="24" r="24" />
            )}
          </svg>
        </a>

        <div>
          <div className="location_multi-link">
            <a
              href={faker.location.cardinalDirection()}
              rel="noopener noreferrer"
            >
              <h3>
                {faker.helpers.arrayElement([
                  "On Water Rental",
                  "Retail Location",
                  "Parking",
                  "Free Parking Lot",
                  "Delivery",
                ])}
              </h3>
            </a>
            <a href={`tel:${faker.phone.number()}`} className="button">
              {faker.phone.number()}
            </a>
          </div>

          {faker.datatype.boolean() ? (
            <a
              href={faker.location.cardinalDirection()}
              rel="noopener noreferrer"
            >
              <p>
                {faker.location.streetAddress()}, {faker.location.city()},{" "}
                {faker.location.zipCode()}
              </p>
            </a>
          ) : null}

          {/* // TODO: v1.2 deeper boolean */}
          {faker.datatype.boolean() ? (
            <p>Open Daily 9:30am &ndash; 5:30pm Weather Permitting</p>
          ) : (
            <p>Closed for the Season</p>
          )}
        </div>
      </div>
    ) : (
      // * this does not have a phone
      <a href={faker.location.cardinalDirection()} rel="noopener noreferrer" className="location">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <title>{faker.location.city()}</title>
          {faker.helpers.arrayElement([true, false]) ? (
            <rect x="0" y="0" width="48" height="48" />
          ) : (
            <circle cx="24" cy="24" r="24" />
          )}
        </svg>
        <div>
          <div className="multi_button">
            <h3>
              {faker.helpers.arrayElement([
                "On Water Rental",
                "Retail Location",
                "Parking",
                "Free Parking Lot",
                "Delivery",
              ])}
            </h3>
          </div>

          {faker.datatype.boolean() ? (
            <p>
              {faker.location.secondaryAddress()}{" "}
              {faker.location.streetAddress()}, {faker.location.city()},{" "}
              {faker.location.zipCode()}
            </p>
          ) : null}

          {/* // TODO: v1.2 deeper boolean */}
          {faker.datatype.boolean() ? (
            <p>Open Daily 9:30am &ndash; 5:30pm Weather Permitting</p>
          ) : (
            <p>Closed for the Season</p>
          )}
        </div>
      </a>
    )
  );
};
