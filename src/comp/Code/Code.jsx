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
          (l, i) => <tr
            className='row'
            key={i}
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
                  codeWord(l, 'graphic', false)
                }
              </td>
              <td
                key='3'
                >
                {
                  codeWord(l, 'fonetic', false)
                }
              </td>
            </tr>
        )
      }
      </tbody>
      </table>
  )
}
