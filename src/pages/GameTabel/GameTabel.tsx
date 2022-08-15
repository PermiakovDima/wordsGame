import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BlockImput } from '../../components/BlockInput';
import { WindowHelper } from '../../components/WindowHelper';

import './GameTabel.scss';

type Props = {
  levels: Level[],
  countLevels: number,
}


export const GameTabel: React.FC<Props> = ({ levels, countLevels }) => {
  const [allLevels, setAllLevels] = useState<Level[]>();
  const [selectLevel, setSelectLevel] = useState<Level>();
  const [openerHelp, setOpenerHelp] = useState<boolean>(false);

  const location = useLocation();


  const searchLevelId = location.pathname.split('/');
  const levelId = searchLevelId[searchLevelId.length - 1];

  const getLocalStorage = localStorage.getItem('wordsGame');

  useEffect(() => {
    setAllLevels(levels);

    if (allLevels) {
      setSelectLevel(allLevels[+levelId - 1]);
    }
  }, [levels, allLevels, levelId]);

  const word = selectLevel?.word.split('');

  const updateWord = (answer: string) => {
    const variabalesFromLevel = selectLevel?.variabales.includes(answer);
    const answersFromLevel = selectLevel?.answers.includes(answer);

    if (variabalesFromLevel) {
      if (answersFromLevel) {
        console.log('coppy')
      } else {
        selectLevel?.answers.push(answer);
        if (getLocalStorage) {
          const qwe = JSON.parse(getLocalStorage);
          qwe.map((el: Level) => {
            if (el.name === selectLevel?.name) {
              el.answers.push(answer)
            }
            return el;
          })

          localStorage.setItem('wordsGame', JSON.stringify(qwe))
          setAllLevels(qwe)
        }
      }
    }
  }

  let oneStar = false;
  let twoStars = false;
  let threeStars = false;

  if (selectLevel) {
    threeStars = selectLevel.variabales.length / 2 < selectLevel.answers.length;
    twoStars = selectLevel.variabales.length / 3 < selectLevel.answers.length;
    oneStar = selectLevel.variabales.length / 5 < selectLevel.answers.length;
  }


  return (
    <div className="GameTabel">
      {openerHelp && <WindowHelper />}
      <div className="GameTabel__header-panel">
        <div className="GameTabel__levels">
          <NavLink
            className="GameTabel__btn-nav"
            to={+searchLevelId[2] === 1 ? '/level/1' : `/level/${+searchLevelId[2] - 1}`}

          >
            <i className="icon-chevron_double_left_icon_143629-2"></i>
          </NavLink>
          <div className="GameTabel__level">
            <span className="GameTabel__level-name">Рівень</span>
            <span className="GameTabel__level-number">{searchLevelId[2]}</span>
          </div>
          <NavLink
            className="GameTabel__btn-nav"
            to={+searchLevelId[2] === countLevels ? `/level/${countLevels}` : `/level/${+searchLevelId[2] + 1}`}
          >
            <i className="icon-chevron_double_right_icon_143628"></i>
          </NavLink>
        </div>
        <div className="GameTabel__help">
          {oneStar && (
            <div className={classNames("GameTabel__stars", { "GameTabel__stars--three-stars": threeStars })}>
              <i className="icon-ant-design_star-filled"></i>
              {twoStars && <i className="icon-ant-design_star-filled"></i>}
              {threeStars && <i className="icon-ant-design_star-filled"></i>}
            </div>
          )
          }
          <NavLink
            to={'/'}
            className="GameTabel__btn-nav"
          >
            <i className="icon-home"></i>
          </NavLink>
          <button
            type="button"
            className="GameTabel__btn-nav GameTabel__btn-nav--float"
            onClick={() => setOpenerHelp(!openerHelp)}
          >
            {
              openerHelp
              ? 'X'
              : <i className="icon-idea-1-Traced"></i>
            }
            
          </button>
        </div>
      </div>
      <div className="GameTabel__answers">
        {selectLevel?.variabales.map((el, ind) => {
          return <div key={ind} className="GameTabel__answer">
            {selectLevel.answers.includes(el)
              ? <p className="GameTabel__answer-view">{el}</p>
              : el.split('').map((chur, ind) => <p className="GameTabel__hidden-answer" key={ind + chur}></p>)}
          </div>
        })}
      </div>
      <div className="GameTabel__letters">
        <BlockImput word={word} updateWord={updateWord} />
      </div>
    </div >
  )
}