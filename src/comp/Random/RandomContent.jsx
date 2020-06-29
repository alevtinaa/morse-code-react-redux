import React from 'react';
import './Random.css';
import { codeText } from '../Code/Coder';
import Loader from '../Loader/Loader';

export default (props) => {
  let fullContent = (
    () => {
    let full = [];
    for (let [key, value] of Object.entries(props.current)) {
      (key !== 'id' && key !== 'category')  &&
      value.map(
        (e, i) => (
          full.push(
            <p
              key={i+Math.random()}
              >
                {
                  codeText(
                    e,
                    props.settings.codingType,
                    true
                    )
                }
              </p>
            )
          )
        )
      };
      return full;
    }
  )();

  return (
    props.current ?
      <div
        className='poem'
        >
        {
          fullContent
        }
        </div>
        :
        <Loader
          />
    )
};
