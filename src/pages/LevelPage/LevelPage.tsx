import React from 'react';

import { LevelButton } from '../../components/LevelButton';

import './LevelPage.scss';

type Props = {
  levels: Level[],
}

export const LevelPage: React.FC<Props> = ({ levels }) => {
  const buffAnswers: string[] = [];
  levels.forEach(el => el.answers.forEach(word => buffAnswers.push(word)));
  const answerPoints = buffAnswers.map(el => el.length);
  const resultAnswers = answerPoints.reduce((pre, curr) => pre + curr, 0)

  const buffVariabales: string[] = [];
  levels.forEach(el => el.variabales.forEach(word => buffVariabales.push(word)));
  const allPoints = buffVariabales.map(el => el.length);
  const resultVariabales = allPoints.reduce((pre, curr) => pre + curr, 0);

  const procent = resultAnswers / (resultVariabales / 100)

  return (
    <div className="LevelPage">
      <div className="LevelPage__header">
        <div className="LevelPage__progress">
          Points:
          {' '}
          {resultAnswers}
          <i className="icon-medal-1"></i>
          <span>{resultAnswers <= 100 && '(Учень)'}</span>
          <span>{resultAnswers > 100 && resultAnswers <= 300 && '(Майстер)'}</span>
          <span>{resultAnswers > 300 && '(Гуру)'}</span>
        </div>
        <span>{procent.toFixed(1)}%</span>
      </div>
      <div className="LevelPage__levels">
        {levels.map(el => <LevelButton
          number={el.name}
          key={el.name}
          answers={el.answers.length}
          variabales={el.variabales.length}
        />)}
      </div>

    </div >

  )
}