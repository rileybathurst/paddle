// this is the Name.tsx file
import React from 'react';
import { BookNow } from './BookNow';

interface SmallMenuProps {
  primary?: boolean;
  onClick?: () => void;
}

export const SmallMenu = ({
  primary = false,
  ...props
}: SmallMenuProps) => {

  return (
    <div
      {...props}
    >
      {/* cloud class is throwing errors but that styling */}
      <div className='menu__small storybook-show'
        style={{
          height: '2rem',
        }}
      >
        <button
          className="menu__small-button"
          // onClick={() => setSlide('menu')}
          type='button'
        >
          <span
            style={{ transform: 'translateY(0)' }}
            className="spinning-button"
          >CLOSE<br />MENU
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            // marginBottom: `-${amount}px`,
          }}
        // ref={ref}
        >
          <ul className="menu-list">
            {/* // TODO: repeated classname doesnt have to be there and faker boolean on active */}
            <li key="rentals"><a href="/rentals" className='link__backed active'>Rentals</a></li>
            <li key="tours"><a href="/tours" className='link__backed' >Tours</a></li>
            <li key="about"><a href="/about" className='link__backed' >About Us</a></li>
            <li key="book"><BookNow /></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};