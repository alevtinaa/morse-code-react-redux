import React from 'react';
import { connect } from 'react-redux';
import './Random.css';
import {
  setCurrent,
  setPrevious,
} from '../../store/ac';
import RandomButtons from '../Buttons/RandomButtons';
import RandomPoem from './RandomPoem';

let Random = (props) => {

  const returnComponentByType = (type) => {
    switch (type) {
      case 'poems':
        return (
          <RandomPoem
            settings={props.settings}
            currentPoem={props.current.poem}
            setCurrent={props.setCurrent}
            previousPoem={props.previous.poem}
            setPrevious={props.setPrevious}
            />
          );
      default:
        return (
          'oops'
          );
        }
      };

  return (
    <>
      {
        returnComponentByType(props.settings.randomType)
      }
    </>
  )
};

let mapStateToProps = (state) => (
  {
    settings: state.settings,
    current: state.savings.current,
    previous: state.savings.previous,
  }
);

export default connect(mapStateToProps,
  {
    setCurrent,
    setPrevious,
  }
)(Random);
