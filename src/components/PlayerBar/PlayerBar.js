import { useState } from 'react';
import { getRandomOptions } from '../../utils/bigHeads';
import { BigHead } from "@bigheads/core";

import EditModal from '../EditModal/EditModal';
import { Button } from 'react-bootstrap';



const PlayerBar = ({ randomAvatar}) => {
    const [avatar, setAvatar] = useState(randomAvatar);
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(undefined);
    const [points, setPoints] = useState(undefined);

    const toggleModal = () => setShowModal(!showModal);

    function handlePlayerInfo(name, points) {
        setShowModal(false);
        setName(name);
        setPoints(points);
    }

    const style = {
        position: 'relative',
        background: '#F3C892',
        height: 'auto',
        width: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        fontWeight: 'bold',
        borderRadius: '15px',
        border: '3px solid aquamarine',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
    }

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
        <div  style={style}>
            <div style={avatarStyle}>
                <BigHead {...avatar}/>
            </div>
            <div className="player-name" style={nameStyle}>{ name }</div>
            <div className="player-points" style={pointsStyle}>{ points }</div>
            <Button
                style={{...editBtn, background: 'green', right: '38px'}} 
                onClick={() => setAvatar(getRandomOptions)}></Button>
            <Button className="edit-player" onClick={() => toggleModal()} style={editBtn}></Button>
            <EditModal onSave={handlePlayerInfo} showEditModal={showModal} amountOfPoints={points} playerName={name}/>
        </div>
    );
}

export default PlayerBar;
