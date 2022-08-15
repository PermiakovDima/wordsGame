import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './LetterButton.scss'

type Props = {
  letter: string,
  activeBtnWord: (lett: string) => void,
  ind: number,
  statusLetter: boolean,
}

export const LetterButton: React.FC<Props> = ({ letter, activeBtnWord, ind, statusLetter }) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(false)
  }, [statusLetter])

  return (
    <div className="LetterButton">
      <label
        htmlFor={`${ind}`}
        className={classNames('LetterButton__btn', {'LetterButton__btn--isActive': checked})}
        onClick={() => {
          if (checked) {
            activeBtnWord(letter + '-')
          } else {
            activeBtnWord(letter)
          }
        }}
      >
        <span>{letter}</span>
        <input
          className='LetterButton__check'
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          value={letter}
          id={`${ind}`}
        />
      </label>
    </div>
  )
}
