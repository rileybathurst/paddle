import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-aria-components";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { SmallMenu } from "./SmallMenu";

type HeaderTypes = {
  smallMenu?: boolean;
};
export const Header = ({ smallMenu }: HeaderTypes) => {
  return (
    <header>
      <TopBar />
      <div className="logo-container">
        <Link href="/" className="link__subtle">
          <Logo />
        </Link>
        <h1 className="sr-only">
          <Link href="/" className="link__subtle">
            {faker.location.city()} kayak &amp; Paddleboard
          </Link>
        </h1>
      </div>

      {smallMenu ? faker.datatype.boolean() ? <SmallMenu /> : null : null}
    </header>
  );
};
