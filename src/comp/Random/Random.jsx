import React, { useState, useEffect } from 'react';
import './Random.css';

export default () => {
  let [poems, setPoems] = useState(null);

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
    <div
      className='poem'
      >
      <p>{poems && poems[0].name}</p>
      <p>{poems && poems[0].content}</p>
      <p>{poems && poems[0].author}</p>
      </div>
  )
};
