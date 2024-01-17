import style from './Header.module.css';
import base from './../../base.module.css';

import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import cn from 'classnames';
import Social from '../../Social/Social';


function Header() {
  return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <Logo />
      <nav className={style.list}>
        <Link to='/' className={style.link}>
        <div className={style.circle}></div>
          Home</Link>
        <Link to='/about' className={style.link}>
        <div className={style.circle}></div>
          About</Link>
        <Link to='/about/detail' className={style.link}>
        <div className={style.circle}></div>
          About detail</Link>
        <Link to='/about/info' className={style.link}>
        <div className={style.circle}></div>
          About info</Link>
      </nav>
      <Social />
      </div>
      
    </header>
  );
}

export default Header;
