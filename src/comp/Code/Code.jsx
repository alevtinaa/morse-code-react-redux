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
              <td
                key='1'
                className='letter'
                >
                  {
                    l
                  }
              </td>
              <td
                key='2'
                >
                {
                  codeWord(l, 'graphic')
                }
              </td>
              <td
                key='3'
                >
                {
                  codeWord(l, 'fonetic')
                }
              </td>
            </tr>
        )
      }
      </tbody>
      </table>
  )
}
