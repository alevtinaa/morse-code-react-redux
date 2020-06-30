import React from 'react';
import './Saved.css';

export default (props) => {
  let {
    sortTypes,
    sortType,
    sortByType,
  } = {...props};

  return (
    <thead
      className='head'
      >
        <tr
          >
          {
            sortTypes.map(
              (e, i) => (
                <td
                  key={`saved-thead-${e}`}
                  onClick={
                    () => sortByType(
                      {
                        type: e,
                        reverse: !sortType.reverse,
                      }
                    )
                  }
                  >
                  <span
                    >
                      {
                        e
                      }
                  </span>
                  <div
                    className={`${sortType.reverse ? 'arrow-up' : 'arrow-down'}`}
                    style={
                      {
                        'visibility': `${sortType.type === e ? 'visible' : 'hidden'}`
                      }
                    }
                    >
                  </div>
                </td>
              )
            )
          }
        </tr>
    </thead>
  )
};
