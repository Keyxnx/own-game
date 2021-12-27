import { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditModal = ({ onSave, showEditModal, amountOfPoints, playerName  }) => {

    const [show, setShow] = useState(false);
    const getName = useRef();
    const getPoints = useRef();



    useEffect(() => {
        setShow(showEditModal)
    }, [showEditModal]);
    
    function saveEditPlayer() {
        onSave(getName.current.value, eval(getPoints.current.value));
        setShow(false);
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    }

    const inputStyle = {
        marginBottom: '5px'
    }

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Информация о игроке!</Modal.Title>
            </Modal.Header>

            <Modal.Body style={style}>
                Имя: <input type="text" ref={getName} style={inputStyle} defaultValue={playerName}></input>
                Кол-во очков: <input type="text" ref={getPoints} defaultValue={amountOfPoints}></input>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => saveEditPlayer()} variant="primary">Сохранить!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
