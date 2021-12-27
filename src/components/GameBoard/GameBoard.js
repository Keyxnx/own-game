import { useState, useEffect } from 'react';
import { questions } from '../../utils/constants';
import Categories from '../Categories/Categories';

const GameBoard = () => {

    const boardStyle = {
        background: '#FAEDC6',
        height: '750px',
        width: '90%',
        margin: '25px auto 0',
        borderRadius: '10px'
    }

    return (
        <div className="game-board" style={boardStyle}>
            <Categories/>
        </div>
    );
}

export default GameBoard;
