import { getRandomOptions } from '../../utils/bigHeads';

import PlayerBar from '../PlayerBar/PlayerBar';

import './PlayersPanel.css';

const PlayersPanel = ({ amounts, handleActivePlayer, activePlayer, points }) => {


    const barsStyle = {
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        width: '90%',
        height: 'auto',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="player-bar" style={barsStyle}>
            {amounts.map(item => {
                return <PlayerBar item={item} key={item.id} randomAvatar={getRandomOptions} handleActivePlayer={handleActivePlayer} activePlayer={activePlayer} points={points} />
            })}
        </div>
    );
}

export default PlayersPanel;
