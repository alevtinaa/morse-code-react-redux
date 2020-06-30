import React from 'react';
import { createStore, combineReducers } from 'redux';

let initSettings = {
  randomType: 'poems',
  codingType: 'graphic',
  colorScheme: 'pink',
  shouldSwipe: true,
};

let initSavings = {
  saved: [
    {
      id: 0,
    },
  ],
  current: {
    poems: {
      id: '',
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
      id: '',
      joke: ['got tired from serious stuff?',
        'ok, seems that it\'s time for some humor'],
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
          saved: [
            ...state.saved,
              {
                ...action.saving,
                date: (new Date(action.saving.id)).toLocaleString('en-GB', { timeZone: 'UTC' }),
                type: action.savingType,
                content: `${action.saving.title ?
                  action.saving.title
                  : action.saving.joke[0].substr(0, 50).trim()}...`,
              }
            ],
        }
      );
    case 'REMOVE':
      return (
        {
          ...state,
          saved: [
            ...state.saved.filter(
              e => e.id !== action.removingId
            ),
          ]
        }
      );
    case 'SET_CURRENT':
      let actionCurrent = (
        () => {
          let newCurrent = {};
          for (let [key, value] of Object.entries(action.current)) {
            switch (key) {
              case 'title':
              case 'lines':
              case 'author':
              case 'joke':
                  Object.defineProperty(newCurrent, key, {
                    value: (Array.isArray(value) ? [...value] : [value]),
                    enumerable: true,
                    configurable: true,
                    writable: true,
                  }
                );
                break;
              case 'category':
              case 'id':
                  Object.defineProperty(newCurrent, key, {
                    value,
                    enumerable: true,
                  }
                );
                break;
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
