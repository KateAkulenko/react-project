//style
import style from './Header.module.css';
import base from './../../base.module.css';
//utility functions and React hooks
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
//components
import Logo from './../Logo/Logo';
import Navigation from './../Navigation/Navigation';
import Burger from './../Burger/Burger';

function Header() {
  // State to track whether the screen is in mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  // State to track whether the burger menu is open
  const [open, setOpen] = useState(false);

  // Function to handle window resize events and update isMobile state
  const handleResize = useCallback(() => {
    // Checking if the window width is less than 767 pixels
    const newIsMobile = window.innerWidth < 767;
    setIsMobile(newIsMobile);
    // Closing the burger menu if the screen width is more than the mobile screen width
    if (!newIsMobile && open) {
      setOpen(false);
    }
  }, [setIsMobile, open]);
  // Effect hook to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Creating the header from components
  return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <Logo />
        {/* Rendering either the Navigation component or the Burger component based on screen size */}
        {!isMobile ? (
          <Navigation isMobile={isMobile} />
        ) : (
          <Burger open={open} setOpen={setOpen} />
        )}
        {open && <Navigation isMobile={isMobile} />}
      </div>
    </header>
  );
}

export default Header;
