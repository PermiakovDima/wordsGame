import React from 'react';

import { Helper } from '../../api/levels';

import './WindowHelper.scss';

type Props = {
  helpWords: string | undefined,
}

export const WindowHelper: React.FC<Props> = ({ helpWords }) => {
  let word = "";

  for (let i = 0; i < Helper.length; i++) {
    if (Helper[i][0] === helpWords) {
      word = Helper[i][1];
    }
  }

  return (
    <div className="WindowHelper">
      <div className="WindowHelper__block">
        {word
          ? <p>{word}</p>
          : <p>Мої вітання!!! Ви відгадали всі слова, перейдіть до наступного
            уровня.</p>}
      </div>
    </div>
  )
}