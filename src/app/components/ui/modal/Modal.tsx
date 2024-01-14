

'use client'
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
import styles from './modal.module.css'

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    // <div className='fixed z-5 top-0 left-0 w-full h-full via-black' onClick={handleClose}>
    //   <div style={{transform: 'translate(-50% -50%)'}} className='absolute top-2/4 left-2/4  bg-white w-96 h-96'>{children}</div>
    // </div>,
    // document.querySelector("body")!
    <div className={styles.backdrop} onClick={handleClose}>
      <div style={{transform: 'translate(-50% -50%)'}} className={styles.modalContainer}>{children}</div>
    </div>,
    document.querySelector("body")!
  );
};

export default Modal;