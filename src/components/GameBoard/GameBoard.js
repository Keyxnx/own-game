import Categories from '../Categories/Categories';

const GameBoard = ({ setPlayersPoints }) => {
    const boardStyle = {
        background: '#FAEDC6',
        height: '750px',
        width: '90%',
        margin: '25px auto 0',
        borderRadius: '10px'
    }

    return (
        <div className="game-board" style={boardStyle}>
            <Categories setPlayersPoints={setPlayersPoints} />
        </div>
    );
}

export default GameBoard;
