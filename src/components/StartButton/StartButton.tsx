import React from 'react';
import { NavLink } from 'react-router-dom';

import './StartButton.scss';

export const StartButton: React.FC = () => {
  return (
    <NavLink
      to="level"
      className="StartButton"
    >
      <i className="icon-Vector"></i>
      Грати
      <i className="icon-Vector"></i>
    </NavLink>
  )
}
