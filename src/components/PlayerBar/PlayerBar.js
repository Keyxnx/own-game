import { useState, useEffect } from 'react';
import cx from 'classnames';
import { getRandomOptions } from '../../utils/bigHeads';
import { BigHead } from "@bigheads/core";

import EditModal from '../EditModal/EditModal';
import { Button } from 'react-bootstrap';

import './styles.css'

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

    const editBtn = {
        position: 'absolute',
        top: '5px',
        right: '10px',
        height: '10px',
        width: '5px',
        background: 'yellow',
        border: 'none',
        outline: 'none'
    }

    const avatarStyle = {
        position: 'absolute',
        top: '10px',
        left: '5px',
        background: '#ffffff',
        height: '90px',
        width: '75px',
        borderRadius: '30%'
    }

    const nameStyle = {
        position: 'absolute',
        bottom: '5px',
        fontSize: '25px'
    }

    const pointsStyle = {
        position: 'absolute',
        top: '50px',
        left: '82px',
        fontSize: '25px'
    }

    return (
        <div className={playerClass} onClick={() => handleActivePlayer(id)}>
            <div style={avatarStyle}>
                <BigHead {...avatar} />
            </div>
            <div className="player-name" style={nameStyle}>{name}</div>
            <div className="player-points" style={pointsStyle}>{points}</div>
            <Button
                style={{ ...editBtn, background: 'green', right: '38px' }}
                onClick={() => setAvatar(getRandomOptions)}></Button>
            <Button className="edit-player" onClick={() => toggleModal()} style={editBtn}></Button>
            <EditModal onSave={handlePlayerInfo} showEditModal={showModal} amountOfPoints={points} playerName={name} />
        </div>
    );
}

export default PlayerBar;
