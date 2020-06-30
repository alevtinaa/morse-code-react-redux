import React from 'react';
import './Saved.css';
import SavedMenu from './SavedMenu';

export default (props) => {
  let {
    saved,
    sortTypes,
    sortType,
    showMenu,
    showedMenu,
  } = {...props};

  return (
    <tbody
      >
      {
        saved.slice(1).sort(
          (a, b) => {
            switch (sortType.reverse) {
              case true:
                return a[sortType.type] > b[sortType.type] ? -1 : a[sortType.type] < b[sortType.type] ? 1 : 0;
              case false:
                return a[sortType.type] > b[sortType.type] ? 1 : a[sortType.type] < b[sortType.type] ? -1 : 0;
              default:
                return;
            }
          }
        )
        .map(
          (saving, i) => (
            <React.Fragment
              key={`${saving}-${i}`}
              >
              <tr
                className='saved-row'
                onClick={
                  () => showMenu(showedMenu ? false : saving.id)
                }
                >
                  {
                    (
                      () => {
                        let entries = [];
                        for (let [key, value] of Object.entries(saving)
                          .filter(([k, v]) => sortTypes.indexOf(k) !== -1)
                          .sort(
                            ([aK, aV], [bK, bV]) => sortTypes.indexOf(aK) - sortTypes.indexOf(bK)
                          )
                            ) {
                          entries.push(
                            <td
                              className={key}
                              key={`saving-entry-${key}-${i}`}
                              >
                                {
                                  value
                                }
                            </td>
                          )
                        };
                        return entries;
                      }
                    )()
                  }
                </tr>

              <SavedMenu
                showMenu={showMenu}
                showedMenu={showedMenu}
                saving={saving}
                remove={props.remove}
                />

            </React.Fragment>
          )
        )
      }
    </tbody>
  )
};
