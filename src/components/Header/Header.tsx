import style from './Header.module.css';
import base from './../../base.module.css';

import Logo from './../Logo/Logo';
import cn from 'classnames';
import Navigation from './../Navigation/Navigation';
import Burger from './../Burger/Burger';
import { useCallback, useEffect, useState } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [open, setOpen] = useState(false);

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < 767;
    setIsMobile(newIsMobile);

    // Закрити меню бургера, якщо тепер екран не є мобільним і меню відкрите
    if (!newIsMobile && open) {
      setOpen(false);
    }
  }, [setIsMobile, open]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <Logo />
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
