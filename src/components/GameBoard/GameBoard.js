import Categories from '../Categories/Categories';

const GameBoard = ({ setPlayersPoints, setIsCorrectAnswer }) => {
    const boardStyle = {
        textShadow: '0 0 5px #fff',
        background: '#FFF7E0',
        height: '650px',
        width: '90%',
        margin: '75px auto 0',
        borderRadius: '10px'
    }

    return (
        <div className="game-board" style={boardStyle}>
            <Categories setPlayersPoints={setPlayersPoints} setIsCorrectAnswer={setIsCorrectAnswer}/>
        </div>
    );
}

export default GameBoard;
