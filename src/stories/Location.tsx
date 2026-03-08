// this is the Name.tsx file
// TODO: these are way to similar for the reality of the design
import { faker } from "@faker-js/faker";
import React from "react";

// ? condor max width I might need to make this slightly wider to deal with phone

export const Location = () => {

  var phone = faker.datatype.boolean();

  return (
    <div className={`location-wrapper ${phone ? 'phone-spacer' : ''}`}>
      <a href={faker.location.cardinalDirection()}
        rel="noopener noreferrer"
        className="location"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <title>{faker.location.city()}</title>
          {faker.helpers.arrayElement([true, false]) ? (
            <rect x="0" y="0" width="48" height="48" />
          ) : (
            <circle cx="24" cy="24" r="24" />
          )}
        </svg>
        <div className="location-details">
          <h3 className="kosciuszko-margin-block-end">
            {faker.helpers.arrayElement([
              "On Water Rental",
              "Retail Location",
              "Parking",
              "Free Parking Lot",
              "Delivery",
            ])}
          </h3>

          {/* // TODO: deeper boolean might not need to be a link? */}
          {faker.datatype.boolean() ? (
            <p>Open Daily 9:30am &ndash; 5:30pm Weather Permitting</p>
          ) : (
            <p>Closed for the Season</p>
          )}

          {faker.datatype.boolean() ? (
            <address>
              {faker.location.secondaryAddress()}<br />
              {faker.location.streetAddress()},<br />
              {faker.location.city()}, {faker.location.zipCode()}
            </address>
          ) : null}
        </div>
      </a>

      {phone ? (
        <a href={`tel:${faker.phone.number()}`}
          className="button location-phone"
        >
          {faker.phone.number()}
        </a>
      ) : null}
    </div>
  );
};
