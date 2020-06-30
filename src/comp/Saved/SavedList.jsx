import React from 'react';
import './Saved.css';
import SavedListHead from './SavedListHead';
import SavedListBody from './SavedListBody';

export default (props) => {
  return (
    <table
      className='saved-table'
      >
        <SavedListHead
          sortTypes={props.sortTypes}
          sortType={props.sortType}
          sortByType={props.sortByType}
          />
        <SavedListBody
          saved={props.saved}
          sortTypes={props.sortTypes}
          sortType={props.sortType}
          showMenu={props.showMenu}
          showedMenu={props.showedMenu}
          remove={props.remove}
          />
    </table>
  )
};
