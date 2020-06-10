import React from 'react';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '1234567890';
const code = {
   'A': '01',
   'B': '1000',
   'C': '1010',
   'D': '100',
   'E': '0',
   'F': '0010',
   'G': '110',
   'H': '0000',
   'I': '00',
   'J': '0111',
   'K': '101',
   'L': '0100',
   'M': '11',
   'N': '10',
   'O': '111',
   'P': '0110',
   'Q': '1101',
   'R': '010',
   'S': '000',
   'T': '1',
   'U': '001',
   'V': '0001',
   'W': '011',
   'X': '1001',
   'Y': '1011',
   'Z': '1100',
   '1': '01111',
   '2': '00111',
   '3': '00011',
   '4': '00001',
   '5': '00000',
   '6': '10000',
   '7': '11000',
   '8': '11100',
   '9': '11110',
   '0': '11111',
};

export const codeWord = (word = 'Oops', type) => {

  switch (type) {
    case 'graphic':
      return word.toUpperCase().split('').map(
        ch => code[ch] ?
          <span
            className='char'
            >
            {
              code[ch].replace(/0/g, '. ').replace(/1/g, '___ ')
            }
          </span>
          :
          <span
            >
          </span>
          )
      break;
    case 'fonetic':
      return word.toUpperCase().split('').map(
        ch => code[ch] ?
          <span
          className='char'
          >
          {
            code[ch].replace(/0/g, 'di ').replace(/1/g, 'dah ')
          }
          </span>
          :
          <span
            >
          </span>
      )
      break;
    default:
      console.log('oops');
    }
};

export const codeText = (text = 'Oops', type) => {
  return text.split(' ').map(
    w => <div
      className='word'
      >
        {
          codeWord(w, type)
        }
      </div>
    )
};
