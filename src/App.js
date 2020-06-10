import React from 'react';
import './App.css';
import Nav from './comp/Nav/Nav';
import Random from './comp/Random/Random';

export default () => {
  return (
    <>
    <Nav
      />
    <div className='main-container'>
      <Random
        />
    </div>
    </>
  );
};
