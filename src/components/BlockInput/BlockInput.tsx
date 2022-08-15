import React, { useEffect, useState } from 'react';
import { LetterButton } from '../letterButton';

import './BlockInput.scss';

type Props = {
  word: string[] | undefined,
  updateWord: (answer: string) => void,
}

export const BlockImput: React.FC<Props> = ({ word, updateWord }) => {
  const [isActiveLetter, setIsActiveLetter] = useState<string>('');
  const [newLetter, setNewLetter] = useState<string>('');
  const [statusLetter, setStatusLetter] = useState<boolean>(true);

  useEffect(() => {
    setIsActiveLetter(newLetter);
  }, [newLetter])

  useEffect(() => {
    setStatusLetter(false)
  }, [])

  const activeBtnWord = (lett: string) => {
    let newWord = isActiveLetter;
    if (lett.includes('-')) {
      const ind = newWord.lastIndexOf(lett.slice(0, lett.length - 1))
      const remove = newWord.split('');
      remove.splice(ind, 1)
      const result = remove.join('')
      // console.log(remove)
      setNewLetter(result)
    } else {
      newWord = isActiveLetter + lett;
      setNewLetter(newWord)
    }

  }

  return (
    <div className="BlockInput">
      <div className="BlockInput__result">
        <span>{isActiveLetter}</span>
      </div>
      <div className="BlockInput__btns">
          <button
            className="BlockInput__btn BlockInput__btn--enter"
            onClick={() => {
              updateWord(isActiveLetter);
              setIsActiveLetter('')
              setStatusLetter(!statusLetter)
            }}
          >
            <i className="icon-checkmark"></i>
          </button>
          <button
            className="BlockInput__btn BlockInput__btn--reset"
            onClick={() => {
              setStatusLetter(!statusLetter)
              setIsActiveLetter('')
            }}
          >
            <i className="icon-cross"></i>
          </button>
        </div>
      <div className="BlockInput__word">
        {word ? word.map((el: string, id: number) => <LetterButton key={id} ind={id} statusLetter={statusLetter} activeBtnWord={activeBtnWord} letter={el} />) : ''}
      </div>
    </div>
  )
}
