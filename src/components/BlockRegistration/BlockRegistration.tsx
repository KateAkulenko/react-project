// styles
import style from './BlockRegistration.module.css';
import base from './../../base.module.css';
import Loading from '../Loading/Loading';
// base
import cn from 'classnames';
import { useState } from 'react';
import { Suspense, lazy } from 'react';
// components
import Button from '../Button/Button';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

// Importing the lazy function from React for code splitting
const Modal = lazy(() => import('../Modal/Modal'));

function BlockRegistration() {
  // Variables for authentication status and modal states
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('user')));
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAnotherModalOpen, setAnotherModalOpen] = useState(false);
  // Function signing in
  const signIn = () => {
    localStorage.setItem('user', 'true');
    // Updating authentication status
    setIsAuth(true);
  };
  // Function logging out
  const logout = () => {
    localStorage.removeItem('user');
    // Updating authentication status
    setIsAuth(false);
  };
  // Functions to handle opening the first modal
  const openModal = () => {
    setModalOpen(true);
  };
  // Functions to handle closing the first modal
  const closeModal = () => {
    setModalOpen(false);
  };
  // Functions to handle opening the second modal
  const openAnotherModal = () => {
    setAnotherModalOpen(true);
  };
  // Functions to handle closing the second modal
  const closeAnotherModal = () => {
    setAnotherModalOpen(false);
  };

  return (
    <div className={style.background}>
      <div className={cn([base.wrapper, style.wrapper])}>
        <div className={style.buttons}>
          {/* Button for Registration */}
          <div>
            <Button text={'Registration'} onClick={openModal} />
            {/* Lazy-loaded Modal for Registration */}
            <Suspense fallback={<Loading />}>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Registration />
              </Modal>
            </Suspense>
          </div>

          <div>
            {isAuth ? (
              // If authenticated, show Logout button
              <Button text={'Logout'} onClick={logout} alertMode={true} />
            ) : (
              // If not authenticated, show Login button
              <Button
                text={'Login'}
                onClick={() => {
                  signIn();
                  // Open second modal for Login
                  openAnotherModal();
                }}
              />
            )}
          </div>
          {/* Lazy-loaded Modal for Login */}
          <Suspense fallback={<Loading />}>
            <Modal isOpen={isAnotherModalOpen} onClose={closeAnotherModal}>
              <Login />
            </Modal>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default BlockRegistration;
