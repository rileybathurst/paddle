import React, { useEffect, useId, useRef, useState } from "react";
import { Link } from "gatsby"
import { PaddleBookNow } from "./paddle-book-now";
import type { PaddleBookNowTypes } from "./types/paddle-book-now-types";

// ? Can this be kept here or does it need to be seperate from the component?
type PaddleMenuTypes = PaddleBookNowTypes & {
  menu_items: {
    href: string;
    label: string;
  }[];
};
export const PaddleMenu = ({ menu_items, peek_base, strapiBranchName }: PaddleMenuTypes) => {

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
        {menu_items.map((item) => (
          <li key={item.href}>
            {/* // * using aria components for storybook */}
            <Link to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <PaddleBookNow
            peek_base={peek_base}
            strapiBranchName={strapiBranchName}
          />
        </li>
      </ul>
    </nav>
  );
};