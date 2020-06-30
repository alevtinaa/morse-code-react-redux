import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Random.css';
import {
  setCurrent,
  setPrevious,
  save,
  remove,
} from '../../store/ac';
import RandomButtons from '../Buttons/RandomButtons';
import RandomContent from './RandomContent';

let Random = (props) => {
  let [isFetching, setIsFetching] = useState(false);

  return (
    <>
      <RandomContent
        settings={props.settings}
        current={props.current[props.settings.randomType]}
        isFetching={isFetching}
        />
      <RandomButtons
        randomType={props.settings.randomType}
        setCurrent={props.setCurrent}
        setPrevious={props.setPrevious}
        setIsFetching={setIsFetching}
        current={props.current[props.settings.randomType]}
        previous={props.previous[props.settings.randomType]}
        save={props.save}
        remove={props.remove}
        saved={props.saved}
        />
    </>
  )
};

let mapStateToProps = (state) => (
  {
    settings: state.settings,
    current: state.savings.current,
    previous: state.savings.previous,
    saved: state.savings.saved,
  }
);

export default connect(mapStateToProps,
  {
    setCurrent,
    setPrevious,
    save,
    remove,
  }
)(Random);
