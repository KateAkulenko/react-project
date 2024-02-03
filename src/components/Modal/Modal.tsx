//style
import style from './Modal.module.css';
//base
import React, { ReactNode } from 'react';

interface ModalProps {
  // Indicates whether the modal should be open or closed
  isOpen: boolean;
  // Function to be called when the modal is closed
  onClose: () => void;
  // Content of the modal represented as React nodes
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
    // Conditionally render the modal only if isOpen is true
      {isOpen && (
        <div className={style.overlay}>
          <div className={style.content}>
            <button className={style.close} onClick={onClose}>
              {/* '×' symbol for the close button */}
              &times;
            </button>
            {/* Render the content of the modal */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;