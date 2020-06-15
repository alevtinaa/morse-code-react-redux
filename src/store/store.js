import React from 'react';
import { createStore, combineReducers } from 'redux';

let initSettings = {
  randomType: 'poems',
  codingType: 'graphic',
  colorScheme: 'pink',
  colorWord: true,
};

let initSavings = {
  poems: [],
  lyrics: [],
  jokes: [],
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
          [action.randomType]: [...state[action.randomType],
            {
              ...action.saving
            }
          ]
        }
      );
    default:

  }
};

export default createStore(
  combineReducers(
    {
      settings: settingsReducer,
    }
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
