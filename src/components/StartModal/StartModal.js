import { useState, useRef } from 'react';

import { Modal, Button } from 'react-bootstrap';

const StartModal = ({ handleAmountOfPlayers }) => {

    const [show, setShow] = useState(true);
    const amountOfPlayers = useRef();

    function startGame() {

        const conditionForStart = amountOfPlayers.current.value !== ''
                               && amountOfPlayers.current.value !== '0';

        if (conditionForStart) {
            setShow(false);
            handleAmountOfPlayers(+amountOfPlayers.current.value);
        }
    }
    console.log('Hi')

    return (
        <div>
           <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите кол-во игроков! :)</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input ref={amountOfPlayers} type="number"></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => startGame()} variant="primary">Установить кол-во!</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default StartModal;
