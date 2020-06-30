import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setCodingType,
  setRandomType,
  save,
  remove,
  } from './store/ac';
import Nav from './comp/Nav/Nav';
import Random from './comp/Random/Random';
import Code from './comp/Code/Code';
import Saved from './comp/Saved/Saved';
import Settings from './comp/Settings/Settings';

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
    <Route
      path='/saved'
      render={
        () =>
        <Saved
          saved={props.saved}
          remove={props.remove}
          />
        }
      />
    <Route
      path='/settings'
      render={
        () =>
        <Settings
          settings={props.settings}
          setCodingType={props.setCodingType}
          setRandomType={props.setRandomType}
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
    saved: state.savings.saved,
  }
);

export default connect(mapStateToProps,
  {
    setCodingType,
    setRandomType,
    save,
    remove,
  }
)(App);
