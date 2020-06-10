import React from 'react';
import './Code.css';
import { codeWord } from './Coder';

export default () => {

  return (
    <table
      className='code'
      >
      <tbody>
      {
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split('')
        .map(
          l => <tr
            className='row'
            >
            {
              <td
                className='letter'
                >
                  {
                    l
                  }
                </td>
            }
            {
              <td>
              {
                codeWord(l, 'graphic')
              }
              </td>
            }
            </tr>
        )
      }
      </tbody>
      </table>
  )
}
