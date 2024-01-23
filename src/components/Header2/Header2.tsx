import style from './Header2.module.css';
import base from './../../base.module.css';

import cn from 'classnames';
import { useState } from 'react';
import Button from './../Button/Button';
import Modal from './../Modal/Modal';
import Registration from './../Registration/Registration';
import Login from './../Login/Login'; 


function Header2() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAnotherModalOpen, setAnotherModalOpen] = useState(false);

  const signIn = () => {
    localStorage.setItem('user', 'true');
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsAuth(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openAnotherModal = () => {
    setAnotherModalOpen(true);
  };

  const closeAnotherModal = () => {
    setAnotherModalOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={cn([base.wrapper, style.wrapper])}>      

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
              text={'Login'}
              onClick={() => {
                signIn();
                openAnotherModal(); 
              }}
            />
          )}
        </div>
        <Modal isOpen={isAnotherModalOpen} onClose={closeAnotherModal}>
          <Login />
        </Modal>
      </div>
    </header>
  );
}

export default Header2;

