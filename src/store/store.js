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
    poems: {
      title: ['Hi there'],
      lines: [
        'it seems that you\'ve decided to learn morse code',
        'well, hope you\'ll have fun',
        'take a look at buttons at the bottom of this page - they\'ll help you'
      ],
      author: ['me']
    },
    lyrics: null,
    jokes: {
      joke: ['renew the page to get some humor'],
      category: [''],
    },
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
            [action.savingType]: state.saved[action.savingType].concat(
              {
                ...action.saving,
              }
            ),
          }
        }
      );
    case 'REMOVE':
      return (
        {
          ...state,
          saved: {
            ...state.saved,
            [action.savingType]: state.saved[action.savingType].filter(
              e => e.id !== action.savingId
            ),
          }
        }
      );
    case 'SET_CURRENT':
      let actionCurrent = (
        () => {
          let newCurrent = {
            id: Date.now(),
          };
          for (let [key, value] of Object.entries({...action.current})) {
            switch (key) {
              case 'title':
              case 'lines':
              case 'author':
              case 'joke':
              case 'category':
                  Object.defineProperty(newCurrent, key, {
                    value: (Array.isArray(value) ? [...value] : [value]),
                    enumerable: true,
                    configurable: true,
                    writable: true,
                  }
                )
              };
            };
            return newCurrent;
          }
        )();

      return (
        {
          ...state,
          current: {
            ...state.current,
            [action.currentType]: {
              ...actionCurrent,
            },
          }
        }
      );
    case 'SET_PREVIOUS':
      return (
        {
          ...state,
          previous: {
            ...state.previous,
            [action.previousType]: action.previous,
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
