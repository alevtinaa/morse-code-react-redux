import React from 'react';
import './Code.css';
import CodeAlphabet from './CodeAlphabet';
import CodeInput from './CodeInput';

export default (props) => {

  return (
    <div
      className='code-container'
      >
        <CodeAlphabet
          />
        <CodeInput
          settings={props.settings}
          />
    </div>
  )
}
