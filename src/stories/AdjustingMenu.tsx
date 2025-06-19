// this is the Name.tsx file
// https://github.com/withastro/templates/blob/main/templates/portfolio/src/components/Nav.astro
import React, { useState, useRef, useEffect } from 'react';
import { faker } from '@faker-js/faker';

interface AdjustingMenuProps {
  primary?: boolean;
  onClick?: () => void;
}

export const AdjustingMenu = ({
  primary = false,
  ...props
}: AdjustingMenuProps) => {

  /** Main menu items */

  const textLinks: { label: string; href: string }[] = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work/' },
    { label: 'About', href: '/about/' },
  ];

  const [slide, setSlide] = useState(true);
  const [amount, setAmount] = useState(0);
  const [wide, setWide] = useState(0);

  const ref = useRef<HTMLUListElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);




  // Hide menu button for large screens.
  /*   const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
      setSlide(e.matches);
      btn.hidden = e.matches;
    };
  
    // I dont think I can build this with netlify its where I have to useRef
    const mediaQueries = window.matchMedia('(min-width: 50em)');
    handleViewports(mediaQueries);
    mediaQueries.addEventListener('change', handleViewports);
  
   */




  useEffect(() => {
    if (ref1.current) {
      setWide(ref1.current.clientWidth);
    }
    console.log('wide', wide);

    if (wide > 600) {
      setSlide(false);
    }
    else {
      setSlide(true);
    }
  }, [ref1.current?.clientWidth]);

  console.log(ref1.current?.clientWidth)







  useEffect(() => {
    if (ref.current) {
      setAmount(ref.current.clientHeight);
    }
    console.log('amount', amount);
  }, [ref.current]);




  const MM = () => {
    return (
      <>
        <div
          className="menu-header"
          ref={ref1}
        >
          <a href="/" className="site-title">
            {faker.company.name()}
          </a>
          <br />
          <button
            className="menu-button"
            onClick={() => setSlide(!slide)}
          >
            Menu
          </button>
        </div >
        <div id="menu-content"
          hidden={slide}
        >
          <ul
            className="nav-items"
            ref={ref}
          >
            {
              textLinks.map(({ label, href }) => (
                <li key={href}>
                  <a className="link" href={href}>
                    {label}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </>
    );
  }

  return (
    <div
      {...props}
    >
      <nav>
        <MM />
      </nav>
    </div>
  );
};














