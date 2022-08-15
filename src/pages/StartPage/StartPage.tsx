import React from 'react';
import { StartButton } from '../../components/StartButton';

import './StartPage.scss';


export const StartPage: React.FC = () => {
  const nameGame = 'слова';

  return (
    <div className="StartPage">
      <div className="StartPage__name-game">
        <div className="StartPage__title">
          {nameGame.split('').map((el: string, id: number) => <span key={id} className="StartPage__letter">{el}</span>)}
        </div>
        <div className="StartPage__subtitle">зі</div>
        <div className="StartPage__title">
          {nameGame.split('').map((el: string, id: number) => <span key={id} className="StartPage__letter">{el}</span>)}
        </div>
      </div>
      <div className="StartPage__menu">
        <StartButton />
      </div>
      <p className="StartPage__warning">*Гра адаптована не на всі мобільні пристрої та рекомендовано тримати мобільний
        пристрій горизонтально!!!
      </p>
    </div>
  )
}
