import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './comp/Nav/Nav';
import Random from './comp/Random/Random';
import Code from './comp/Code/Code';

export default () => {
  return (
    <>
    <Nav
      />
    <div className='main-container'>
    <Route
      path='/random'
      render={
        () =>
        <Random
          />
        }
      />
    <Route
      path='/code'
      render={
        () =>
        <Code
          />
        }
      />
    </div>
    </>
  );
};
