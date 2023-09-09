import React from 'react';
import style from './Button.module.css'

export default function Button({text, type, handleClick}) {
  return (
    <div className={style.button_container}>
      <button
        className={style.Button}
        type={type}
        onClick={handleClick}
        aria-label={text}
      >
        {text}
      </button>
    </div>
  )
}
