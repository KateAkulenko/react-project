import style from './Modal.module.css';
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={style.overlay}>
          <div className={style.content}>
            <button className={style.close} onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;