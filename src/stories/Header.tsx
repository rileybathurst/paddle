import React, { useEffect, useId, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-aria-components";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { BookNow } from "./BookNow";

const MENU_ITEMS = [
  ...Array.from({ length: faker.number.int({ min: 2, max: 8 }) }).map(() => ({
    href: `/${faker.lorem.slug()}`,
    label: faker.lorem.words({ min: 1, max: 3 }),
  }))
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

    <hr />

      <nav className="nav" aria-label="Main navigation">
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          onClick={() => {
            setIsMenuOpen((currentlyOpen) => !currentlyOpen);
          }}
        >
          Menu
        </button>

        <ul
          id={menuId}
          className={`menu-list ${isMenuOpen ? "is-open" : ""}`}
          onClick={(event) => {
            if (event.target instanceof HTMLAnchorElement) {
              closeMenu();
            }
          }}
        >
          {MENU_ITEMS.map((item) => (
            <li key={item.href}>
              {/* // * using aria components for storybook */}
              <Link href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <BookNow />
          </li>
        </ul>
      </nav>

          <hr />
    </header>
  );
};
