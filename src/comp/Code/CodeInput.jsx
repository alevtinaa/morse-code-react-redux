import React, { useState, useRef } from 'react';
import './Code.css';
import { codeText } from './Coder';

export default (props) => {
  let [inputed, input] = useState(null);

  return (
    <div
      className='code'
      >
        <textarea
          className='code-input'
          placeholder='Type text here to code it...'
          value={inputed}
          onInput={
            (e) => input(e.target.value)
          }
          >
        </textarea>
        <div
          className='code-output'
          >
            {
              inputed && codeText(inputed, props.settings.codingType, props.settings.shouldSwitch)
            }
        </div>
    </div>
  )
};
