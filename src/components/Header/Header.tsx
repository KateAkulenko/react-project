import style from './Header.module.css';
import base from './../../base.module.css';


import Logo from './../Logo/Logo';
import cn from 'classnames';
import Navigation from './../Navigation/Navigation';

function Header() {
    return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

