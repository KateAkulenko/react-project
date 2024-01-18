import style from './Header.module.css';
import base from './../../base.module.css';

import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import cn from 'classnames';
import { useState } from 'react';
import Button from './../Button/Button';


function Header() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));

  const signIn = () => {
    localStorage.setItem('user', true);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuth(false);
  };

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
        <Link to='/online-calculator' className={style.link}>
        <div className={style.circle}></div>
          Online-calculator</Link>
        <Link to='/contacts' className={style.link}>
        <div className={style.circle}></div>
          Contacts</Link>
      </nav>
      {
      isAuth 
      ? <Button text={'Logout'} onClick={logout} alertMode={true}/> 
      : <Button text={'Sign in'} onClick={signIn}/>
      }
      </div>
    </header>
  );
}

export default Header;
