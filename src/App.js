import { useState } from 'react';
import './App.css';
import StartModal from './components/StartModal/StartModal';
import PlayersPanel from './components/PlayersPanel/PlayersPanel';
import GameBoard from './components/GameBoard/GameBoard';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [amountOfPlayers, setAmountOfPlayers] = useState([]);
  const [activePlayer, setActivePlayer] = useState('');
  const [playersPoints, setPlayersPoints] = useState({});

  // document.onkeydown = function (e) {
  //   if (e.keyCode === 116) {
  //     return false;
  //   }
  // };

  function handleAmountOfPlayers(amount) {
    const players = Array(amount).fill(undefined).map((_) => ({ id: uuidv4() }))

    setAmountOfPlayers(players);
  }

  const handleActivePlayer = (id) => {
    setActivePlayer(id);
  }

  const handlePlayersPoints = (points) => {

    setPlayersPoints(prevPlayersPoints => {
      const activePlayerPoints = prevPlayersPoints[activePlayer] ? prevPlayersPoints[activePlayer] + points : points;
      return {
        ...prevPlayersPoints,
        [activePlayer]: activePlayerPoints
      }
    });
  }

  console.log(playersPoints, activePlayer)

  return (
    <div className="App">
      <StartModal handleAmountOfPlayers={handleAmountOfPlayers} />
      <PlayersPanel amounts={amountOfPlayers} handleActivePlayer={handleActivePlayer} activePlayer={activePlayer} points={playersPoints} />
      <GameBoard setPlayersPoints={handlePlayersPoints} />
    </div>
  );
}

export default App;
