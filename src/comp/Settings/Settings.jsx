import React from 'react';
import './Settings.css';
import { codeWord } from '../Code/Coder';

export default (props) => {
  return (
    <div
      className='settings'
      >
      <span
        className='question1'
        >
        What kind of random stuff you'd like to see?
        </span>
        <div
          className='input1'
          >
          <span
            >
            <input
              type='radio'
              name='randomType'
              id='randomType'
              value='poems'
              checked={props.settings.randomType === 'poems'}
              >
              </input>
              <label
                forHTML='randomType'
                >
                poems
                </label>
              </span>
          <span
            >
            <input
              type='radio'
              name='randomType'
              id='randomType'
              value='lyrics'
              checked={props.settings.randomType === 'lyrics'}
              >
              </input>
              <label
                forHTML='randomType'
                >
                lyrics
                </label>
              </span>
            <span
              >
              <input
              type='radio'
              name='randomType'
              id='randomType'
              value='jokes'
              checked={props.settings.randomType === 'jokes'}
              >
              </input>
              <label
                forHTML='randomType'
                >
                jokes
                </label>
            </span>
          </div>
      <span
        className='question2'
        >
        How would you like to code stuff?
        </span>
      <div
        className='input2'
        >
        <span
          >
          <input
            type='radio'
            name='codingType'
            id='codingType'
            value='graphic'
            checked={props.settings.codingType === 'graphic'}
            >
            </input>
            <label
              forHTML='codingType'
              >
              {
                codeWord('abc', 'graphic')
              }
              </label>
            </span>
          <span
            >
            <input
              type='radio'
              name='codingType'
              id='codingType'
              value='fonetic'
              checked={props.settings.codingType === 'fonetic'}
              >
              </input>
              <label
                forHTML='codingType'
                >
                {
                  codeWord('abc', 'fonetic')
                }
                </label>
              </span>
        </div>
      <span
        className='question3'
        >
        Pick your fav color
        </span>
      <div
        className='input3'
        >
        <span
          >
          <input
            type='radio'
            name='colorScheme'
            id='colorScheme'
            value='pink'
            checked={props.settings.colorScheme === 'pink'}
            >
            </input>
            <label
              forHTML='codingType'
              >
              pink
              </label>
            </span>
        </div>
      <span
        className='question4'
        >
        Should we show you words' borders?
        </span>
      <div
        className='input4'
        >
        <span
          >
          <input
            type='radio'
            name='colorWord'
            id='colorWord'
            value='yes'
            checked={props.settings.colorWord}
            >
            </input>
            <label
              forHTML='colorWord'
              >
              yes
              </label>
            </span>
          <span
            >
            <input
              type='radio'
              name='colorWord'
              id='colorWord'
              value='no'
              checked={!props.settings.colorWord}
              >
              </input>
              <label
                forHTML='colorWord'
                >
                no
                </label>
              </span>
        </div>
    </div>
  )
}
