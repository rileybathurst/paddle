// this is the Name.tsx file
import React from "react";
import { faker } from "@faker-js/faker";
import FacebookIcon from "../assets/facebook-icon";
import InstagramIcon from "../assets/instagram-icon";
import TripadvisorIcon from "../assets/tripadvisor-icon";

export const Socials = () => {
  return (
    <div className="social">
      {faker.datatype.boolean() && (
        <a
          href={faker.location.city()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${faker.location.city()} facebook`}
        >
          <FacebookIcon />
        </a>
      )}
      {faker.datatype.boolean() && (
        <a
          href={faker.location.city()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${faker.location.city()} instagram`}
        >
          <InstagramIcon />
        </a>
      )}
      {faker.datatype.boolean() && (
        <a
          href={faker.location.city()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${faker.location.city()} tripadvisor`}
        >
          <TripadvisorIcon />
        </a>
      )}
    </div>
  );
};
