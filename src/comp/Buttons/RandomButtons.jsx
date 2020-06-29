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
        className={`random-button ${previous[randomType] ? '' : 'disabled'}`}
        src={IconBack}
        clickHandler={
          () => {
            let lastCurrent = current[randomType];
            setCurrent(
              randomType,
              previous[randomType]
              );
            setPrevious(
              randomType,
              lastCurrent
              );
            }
          }
        disabled={!previous[randomType]}
        />
      <Button
        className={`random-button ${isCurrentSaved(current[randomType], randomType, saved) ? 'active' : ''}`}
        src={IconSave}
        clickHandler={
          () => {
            isCurrentSaved(current[randomType], randomType, saved) ?
              props.remove(
                randomType,
                current[randomType].id
              )
              :
              props.save(
                randomType,
                current[randomType]
              )
            }
          }
        />
      <Button
        className='random-button'
        src={IconNext}
        clickHandler={
          () => fetchData(
            randomType,
            setPrevious,
            setCurrent,
            current[randomType]
            )
          }
        />
      </div>
    )
  };
