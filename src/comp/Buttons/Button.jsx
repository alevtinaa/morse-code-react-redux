import React from 'react';
import './Buttons.css';

export default (props) => {
  return (
    <button
      className={props.className}
      onClick={props.clickHandler}
      disabled={props.disabled}
      >
        <img
          src={props.src}
          >
          </img>
      </button>
  )
}
