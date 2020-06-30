import React from 'react';

export default (props) => {
  return (
    <tr
      className='saved-menu'
      style={
        {
          'display': `${props.showedMenu === props.saving.id ? 'contents' : 'none'}`
        }
      }
      >
        <td
          onClick={
            () => console.log('not all at once... be patient, please')
          }
          colSpan='2'
          >
            <span>
            {
              'open'
            }
            </span>
        </td>
        <td
          onClick={
            () => {
              props.showMenu(false);
              props.remove(props.saving.id);
            }
          }
          >
            <span>
            {
              'delete'
            }
            </span>
        </td>
    </tr>
  )
};
