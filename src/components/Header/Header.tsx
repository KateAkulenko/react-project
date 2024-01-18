import style from './Header.module.css';
import base from './../../base.module.css';

import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import cn from 'classnames';
import { useState } from 'react';
import Button from './../Button/Button';
import Modal from './../Modal/Modal';
import Registration from './../Registration/Registration';
import Login from './../Login/Login';

function Header() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));

  const signIn = () => {
    localStorage.setItem('user', 'true');
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuth(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <Logo />
        <nav className={style.list}>
          <Link to="/" className={style.link}>
            <div className={style.circle}></div>
            Home
          </Link>
          <Link to="/about" className={style.link}>
            <div className={style.circle}></div>
            About
          </Link>
          <Link to="/online-calculator" className={style.link}>
            <div className={style.circle}></div>
            Online-calculator
          </Link>
          <Link to="/contacts" className={style.link}>
            <div className={style.circle}></div>
            Contacts
          </Link>
        </nav>

        <div>
          <Button text={'Registration'} onClick={openModal} />
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Registration />
          </Modal>
        </div>
        <div>
          {isAuth ? (
            <Button text={'Logout'} onClick={logout} alertMode={true} />
          ) : (
            <Button
              text={'Sign in'}
              onClick={() => {
                signIn();
                openModal();
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <Login />
                </Modal>;
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
