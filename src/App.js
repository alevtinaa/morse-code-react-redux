import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setCodingType,
  save,
  } from './store/ac';
import Nav from './comp/Nav/Nav';
import Random from './comp/Random/Random';
import Code from './comp/Code/Code';

let App = (props) => {
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

let mapStateToProps = (state) => (
  {
    settings: state.settings,
    savings: state.savings,
  }
);

export default connect(mapStateToProps,
  {
    setCodingType,
    save,
  }
)(App);
