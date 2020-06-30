import React from 'react';
import './Buttons.css';
import { fetchData } from '../../store/fetch';
import { isCurrentSaved } from '../../functions';
import Button from './Button';
import IconSave from './Icons/icon-favorite.png';
import IconNext from './Icons/icon-next.png';
import IconBack from './Icons/icon-back.png';

export default (props) => {
  let {
    randomType,
    setCurrent,
    setPrevious,
    current,
    previous,
    save,
    remove,
    saved
  } = {...props};

  return (
    <div
      className='random-buttons'
      >
      <Button
        className={`random-button ${previous ? '' : 'disabled'}`}
        src={IconBack}
        clickHandler={
          () => {
            let lastCurrent = current;
            setCurrent(
              randomType,
              previous
              );
            setPrevious(
              randomType,
              lastCurrent
              );
            }
          }
        disabled={!previous}
        />
      <Button
        className={
          `random-button
            ${isCurrentSaved(current, randomType, saved) ? 'active'
              : !current.id ? 'disabled'
              : ''}`
          }
        src={IconSave}
        clickHandler={
          () => {
            isCurrentSaved(current, randomType, saved) ?
              props.remove(
                current.id
              )
              :
              props.save(
                randomType,
                current
              )
            }
          }
        disabled={!current.id}
        />
      <Button
        className='random-button'
        src={IconNext}
        clickHandler={
          () => fetchData(
            randomType,
            setPrevious,
            setCurrent,
            current,
            props.setIsFetching
            )
          }
        />
      </div>
    )
  };
