import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './LevelButton.scss';

type Props = {
  number: number,
  answers: number,
  variabales: number,
};

export const LevelButton: React.FC<Props> = ({ number, answers, variabales }) => {
  const threeStars = variabales / 2 < answers;
  const twoStars = variabales / 3 < answers;
  const oneStar = variabales / 5 < answers;

  return (
    <div className="LevelButton">
      <NavLink
        to={`${number}`}
        className={classNames("LevelButton__link", { "LevelButton__link--three-stars": threeStars })}
      >
        {number}
      </NavLink>
      <div className={classNames("LevelButton__stars", {"LevelButton__stars--three-stars": threeStars})}>
        {oneStar && <i className="icon-ant-design_star-filled"></i>}
        {twoStars && <i className="icon-ant-design_star-filled"></i>}
        {threeStars && <i className="icon-ant-design_star-filled"></i>}
      </div>
    </div>
  )
}
