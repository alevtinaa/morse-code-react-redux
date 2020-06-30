import React from 'react';
import Message from '../Messages/Message';

export default (props) => {
  return (
    <Message
      lines={
        [
          'Hi.',
          'I believe this page\'s a perfect place for some greeting words',
          'or maybe even a little story about this project',
          'but let\'s face the truth - there\'s no sense in it',
          'while it\'s development (as well as my studying) is still in progress',
          'and there\'re a lot of things to be done.',
          'Anyway, I hope you\'ll like what you see here',
          'with all that entails...',
        ]
      }
      linesStyle={
        {
          0: {
            'color': 'rgba(255, 0, 0, 0.5)',
          },
          6: {
            'color': 'rgba(255, 0, 0, 0.5)',
          },
          7: {
            'color': 'rgba(255, 0, 0, 0.5)',
          }
        }
      }
      />
  )
};
