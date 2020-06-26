import React, { useState, useEffect } from 'react';
import './Random.css';
import { codeText } from '../Code/Coder';
import Loader from '../Loader/Loader';

export default (props) => {
  useEffect(
    () => {
      props.setPrevious('poem', props.currentPoem)
      fetch('https://www.poemist.com/api/v1/randompoems')
        .then(
          resp => resp.json()
        )
        .then(
          data => props.setCurrent('poem', data[0])
        )
    }, [props.settings]
  );

  return (
    props.currentPoem ? (
    <div
      className='poem'
      >
      <p>
        {
          codeText(props.currentPoem.title, props.settings.codingType, true)
        }
        </p>
      <p>
        {
          codeText(props.currentPoem.content, props.settings.codingType, true)
        }
        </p>
      <p>
        {
          codeText('by ' + props.currentPoem.poet.name, props.settings.codingType, true)
        }
        </p>
    </div>
    ) : <Loader
          />
        )
      };
