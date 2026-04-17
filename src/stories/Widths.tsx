// * complex file to storybook but very useful
import { faker } from "@faker-js/faker";
import React from "react";

type Width = {
  name: string;
  alias?: string;
};

type WidthCardTypes = {
  widths: Width[];
};
const WidthCard = ({ widths }: WidthCardTypes) => {
  return (
    <>
      {widths.map(({ name, alias }) => (
        <div
          key={name}
          className={name}
          style={{
            minHeight: "8rem",
            backgroundColor: "var(--neutral-200)",
            marginInline: "auto",
            marginBlockEnd: "var(--vinson)",
            paddingBlock: "var(--vinson)",
            color: "var(--neutral-700)",
          }}
        >
          {name}

          {alias && (
            <p>alias:&nbsp;{alias}</p>
          )}

          <br />
          <p
            className="white-space"
            style={{
              color: "var(--lake-400)",
            }}
          >
            {faker.string.fromCharacters("abcdefghijklmnopqrstuvwxyz", {
              min: 45,
              max: 45,
            })}
          </p>
          <p
            className="white-space"
            style={{
              color: "red",
            }}
          >
            {faker.string.fromCharacters("abcdefghijklmnopqrstuvwxyz", {
              min: 90,
              max: 90,
            })}
          </p>
        </div>
      ))}
    </>
  );
};

export const Widths = () => {
  return (
    <React.Fragment>
      <main>
        <h1>Widths</h1>
        <p>condor is good for measure</p>
      </main>
      <WidthCard
        widths={[
          { name: "vulture" },
          { name: "stork" },
          { name: "condor", alias: "main / location" },
          { name: "pelican", alias: "header" },
          { name: "albatross", alias: "footer / deck / react-aria-Breadcrumbs" },
        ]}
      />
    </React.Fragment>
  );
};
