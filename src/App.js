import { useState } from 'react';
import './App.css';
import StartModal from './components/StartModal/StartModal';
import PlayersPanel from './components/PlayersPanel/PlayersPanel';
import GameBoard from './components/GameBoard/GameBoard';

function App() {

  const [amountOfPlayers, setAmountOfPlayers] = useState([]);

  // document.onkeydown = function (e) {
  //   if (e.keyCode === 116) {
  //     return false;
  //   }
  // };

  function handleAmountOfPlayers(amount) {
    setAmountOfPlayers(Array(amount).fill(null));
  }

  return (
    <div className="App">
      <StartModal handleAmountOfPlayers={handleAmountOfPlayers}/>
      <PlayersPanel amounts={amountOfPlayers}/>
      <GameBoard />
    </div>
  );
}

export default App;
