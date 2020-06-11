import React, { useState, useEffect } from 'react';
import './Random.css';
import { codeText } from '../Code/Coder';
import Loader from '../Loader/Loader';

export default () => {
  const [poems, setPoems] = useState(null);

  useEffect(
    () => {
      fetch('https://www.poemist.com/api/v1/randompoems')
        .then(
          resp => resp.json()
        )
        .then(
          data => setPoems(data)
        )
    }, []
  );

  return (
    poems ?
    <div
      className='poem'
      >
      <p>
        {
          codeText(poems[0].title, 'graphic')
          }
        </p>
      <p>
        {
          codeText(poems[0].content, 'graphic')
        }
        </p>
      <p>
        {
          codeText(poems[0].poet.name, 'graphic')
        }
        </p>
      </div>
      :
      <Loader
        />
  )
};
