import React from 'react';
import { NavLink  } from 'react-router-dom';
import './Nav.css';

export default () => {
  return (
    <div
      className='nav'
      >
      <NavLink
        to='/main'
        className='link'
        activeClassName='active'
        >
        main
        </NavLink>
      <NavLink
        to='/code'
        className='link'
        activeClassName='active'
        >
        code
        </NavLink>
      <NavLink
        to='/random'
        className='link'
        activeClassName='active'
        >
        random
        </NavLink>
      <NavLink
        to='/saved'
        className='link'
        activeClassName='active'
        >
        saved
        </NavLink>
      <NavLink
        to='/settings'
        className='link'
        activeClassName='active'
        >
        settings
        </NavLink>
      </div>
  )
};
