import React from 'react';

export default (props) => {
  return (
    <tr
      style={
        {
          'display': `${props.showedMenu === props.saving.id ? 'contents' : 'none'}`
        }
      }
      >
        <td
          onClick={
            () => {
              props.showMenu(false);
              props.remove(props.saving.id);
            }
          }
          >
            {
              'delete'
            }
        </td>
    </tr>
  )
};
