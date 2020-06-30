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
              key={`full-${key}-${i}`}
              >
                {
                  codeText(
                    e,
                    props.settings.codingType,
                    props.settings.shouldSwitch,
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
    props.isFetching ?
      <Loader
        />
      :
      <div
        >
        {
          fullContent
        }
        </div>
    )
};
