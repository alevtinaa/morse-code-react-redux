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
          <form
            onChange={
              (e) => props.setRandomType(e.target.value)
            }
            >
          <span
            >
            <input
              type='radio'
              name='randomType'
              id='randomType'
              value='poems'
              defaultChecked={props.settings.randomType === 'poems'}
              >
              </input>
              <label
                forhtml='randomType'
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
              value='jokes'
              defaultChecked={props.settings.randomType === 'jokes'}
              >
              </input>
              <label
                forhtml='randomType'
                >
                jokes
                </label>
            </span>
          </form>
        </div>
      <span
        className='question2'
        >
        How would you like to code stuff?
        </span>
      <div
        className='input2'
        >
        <form
          onChange={
            (e) => props.setCodingType(e.target.value)
          }
          >
        <span
          >
          <input
            type='radio'
            name='codingType'
            id='codingType'
            value='graphic'
            defaultChecked={props.settings.codingType === 'graphic'}
            >
            </input>
            <label
              forhtml='codingType'
              >
              {
                codeWord('abc', 'graphic', props.settings.shouldSwitch)
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
              defaultChecked={props.settings.codingType === 'fonetic'}
              >
              </input>
              <label
                forhtml='codingType'
                >
                {
                  codeWord('abc', 'fonetic', props.settings.shouldSwitch)
                }
                </label>
              </span>
            </form>
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
            defaultChecked={props.settings.colorScheme === 'pink'}
            >
            </input>
            <label
              forhtml='codingType'
              >
              pink
              </label>
            </span>
        </div>
      <span
        className='question4'
        >
        Wanna swipe letters on hover?
        </span>
      <div
        className='input4'
        >
        <form
          onChange={
            (e) => props.setShouldSwitch(e.target.value)
          }
        >
        <span
          >
          <input
            type='radio'
            name='shouldSwitch'
            id='shouldSwitch'
            value='1'
            defaultChecked={props.settings.shouldSwitch}
            >
            </input>
            <label
              forhtml='shouldSwitch'
              >
              yes
              </label>
            </span>
          <span
            >
            <input
              type='radio'
              name='shouldSwitch'
              id='shouldSwitch'
              value=''
              defaultChecked={!props.settings.shouldSwitch}
              >
              </input>
              <label
                forhtml='shouldSwitch'
                >
                no
                </label>
            </span>
          </form>
        </div>
    </div>
  )
}
