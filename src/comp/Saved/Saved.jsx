import React, { useState, Fragment } from 'react';
import './Saved.css';
import SavedList from './SavedList';
import Message from '../Messages/Message';
import { Link  } from 'react-router-dom';

export default (props) => {
  let sortTypes = ['type', 'content', 'date'];
  let [sortType, sortByType] = useState(
    {
      type: 'date',
      reverse: true,
    }
  );
  let [showedMenu, showMenu] = useState(null);

  return ( props.saved.length > 1 ?
    <SavedList
      sortTypes={sortTypes}
      sortType={sortType}
      sortByType={sortByType}
      saved={props.saved}
      showMenu={showMenu}
      showedMenu={showedMenu}
      remove={props.remove}
      />
    :
    <Message
      lines={
        [
          <Fragment>You haven't saved anything yet...</Fragment>,
          <Fragment>Visit <Link to='/random'>Random page</Link> to find something interesting for you.</Fragment>,
        ]
      }
      linesStyle={
        {
          1: {
            'color': 'rgba(255, 0, 0, 0.5)',
          }
        }
      }
      />
  )
}
