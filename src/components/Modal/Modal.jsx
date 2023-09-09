import React, { useEffect} from 'react';
import style from './Modal.module.css'

export default function Modal({ largeImageURL, tags, modalClose }) {
    const handleBackdropClose = event => {
      if (event.target === event.currentTarget) {
        modalClose();
      }
    };
  
    useEffect(() => {
      const handleKeyDown = event => {
        if (event.code === 'Escape') {
          modalClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [modalClose]);
  
    return (
      <div className={style.overlay} onClick={handleBackdropClose}>
        <div className={style.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
