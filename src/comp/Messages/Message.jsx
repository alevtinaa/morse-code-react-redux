import React from 'react';
import './Messages.css';

export default (props) => {
  return (
    <div
      className='message'
      >
        {
          props.lines.map(
            (line, i) => <span
              key={`message-${props.lines.length}-${line.length}-${i}`}
              style={
                props.linesStyle[i] && props.linesStyle[i]
              }
              >
                {
                  line
                }
            </span>
          )
        }
    </div>
  )
};
