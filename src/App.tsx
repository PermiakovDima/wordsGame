import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage';
import { LevelPage } from './pages/LevelPage';
import { GameTabel } from './pages/GameTabel';

import { Levels } from './api/levels';


import './App.scss';
import './styles/main.scss';

export const App: React.FC = () => {
  const [gameDate, setGameDate] = useState<Level[] | []>([]);
  const checkProgres = localStorage.getItem('wordsGame');

  useEffect(() => {
    if (!checkProgres) {
      localStorage.setItem('wordsGame', JSON.stringify(Levels));
      setGameDate(Levels);
    } else {
      const newGameDate = JSON.parse(checkProgres);

      setGameDate(newGameDate);
    }
  }, [checkProgres]);

  console.log(gameDate)

  return (
    <div className="App">
      <div className="container">
        <Routes >
          <Route path="/" element={<StartPage />} />
          <Route path="level" element={<LevelPage levels={gameDate} />} />
          <Route path="level/:levelNumber" element={<GameTabel levels={gameDate} countLevels={gameDate.length} />} />
        </Routes>
      </div>
    </div>
  );
}
