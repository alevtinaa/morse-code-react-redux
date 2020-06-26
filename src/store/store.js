import React from 'react';
import { createStore, combineReducers } from 'redux';

let initSettings = {
  randomType: 'poems',
  codingType: 'graphic',
  colorScheme: 'pink',
  colorWord: true,
};

let initSavings = {
  saved: {
    poems: [],
    lyrics: [],
    jokes: []
  },
  current: {
    poems: null,
    lyrics: null,
    jokes: null,
  },
  previous: {
    poems: null,
    lyrics: null,
    jokes: null,
  },
};

const settingsReducer = (state = initSettings, action) => {
  switch (action.type) {
    case 'SET_CODING_TYPE':
      return (
        {
          ...state,
          codingType: action.codingType,
        }
      );
      case 'SET_RANDOM_TYPE':
      return (
        {
          ...state,
          randomType: action.randomType,
        }
      );
    default:
      return state;
  }
};

const savingsReducer = (state = initSavings, action) => {
  switch (action.type) {
    case 'SAVE':
      return (
        {
          ...state,
          saved: {
            ...state.saved,
            [action.savingType]: state[action.savingType].slice().push(action.saving),
          }
        }
      );
    case 'SET_CURRENT':
      return (
        {
          ...state,
          current: {
            ...state.current,
            [action.savingType]: action.saving,
          }
        }
      );
    case 'SET_PREVIOUS':
      return (
        {
          ...state,
          previous: {
            ...state.previous,
            [action.savingType]: action.saving,
          }
        }
      );
    default:
      return state;
  }
};

export default createStore(
  combineReducers(
    {
      settings: settingsReducer,
      savings: savingsReducer,
    }
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
