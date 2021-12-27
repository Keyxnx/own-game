import { getRandomOptions } from '../../utils/bigHeads';

import PlayerBar from '../PlayerBar/PlayerBar';

import './PlayersPanel.css';

const PlayersPanel = ({ amounts }) => {


    const barsStyle = {
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        width: '90%',
        height: '150px',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="player-bar" style={barsStyle}>
            { amounts.map((_, index) => {
                return <PlayerBar key={index} randomAvatar={getRandomOptions}/>
            }) }
        </div>
    );
}

export default PlayersPanel;
