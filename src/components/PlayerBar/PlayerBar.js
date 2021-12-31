import { useState, useEffect } from 'react';
import cx from 'classnames';
import { getRandomOptions } from '../../utils/bigHeads';
import { BigHead } from "@bigheads/core";

import EditModal from '../EditModal/EditModal';
import { Button } from 'react-bootstrap';

import './styles.css'


const style = {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(to bottom, #71DFE7 0, #71DFE7 65px, #009DAE 67px 200px)'
}

const btnStyle = {
    width: '20px',
    height: '25px',
    borderRadius: '50%'
}

const avatarStyle = {
    background: '#ffffff',
    height: '90px',
    width: '75px',
    borderRadius: '35%'
}

const nameStyle = {
    fontSize: '22px'
}

const pointsStyle = {
    fontSize: '30px',
    textShadow: '0 0 1.5px black'
}


const PlayerBar = ({ item: { id }, randomAvatar, handleActivePlayer, activePlayer, points: playerPoints }) => {
    const [avatar, setAvatar] = useState(randomAvatar);
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(undefined);
    const [points, setPoints] = useState(playerPoints[id]);


    const toggleModal = () => setShowModal(!showModal);

    function handlePlayerInfo(name, points) {
        setShowModal(false);
        setName(name);
        setPoints(points);
    }

    useEffect(() => {
        setPoints(playerPoints[id])
    }, [playerPoints])

    const playerClass = cx('player', {
        activePlayer: id === activePlayer
    })


    return (
        <div className={playerClass} style={style} onClick={() => handleActivePlayer(id)}>
            <div style={avatarStyle}>
                <BigHead {...avatar} />
            </div>
            <div className="player-name" style={nameStyle}>{name}</div>
            <div className="player-points" style={pointsStyle}>{points}</div>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '80%', padding: '0 20px'}}>
                <Button onClick={() => setAvatar(getRandomOptions)} style={{...btnStyle,background: '#FBFFE2', border: 'none'}}></Button>
                <Button className="edit-player" onClick={() => toggleModal()} style={{...btnStyle,background: '#FFCC1D', border: 'none'}}></Button>
            </div>
            <EditModal onSave={handlePlayerInfo} onHide={() => setShowModal(false)} showEditModal={showModal} amountOfPoints={points} playerName={name} />
        </div>
    );
}

export default PlayerBar;
