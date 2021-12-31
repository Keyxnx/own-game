import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AnswerModal from '../../components/AnswerModal/AnswerModal';
import ImageQuestion from '../ImageQuestion/ImageQuestion';


const QuestionModal = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [isQuestionPicture, setIsQuestionPicture] = useState(false);

    useEffect(() => {
        isPicture(props.question)
    })

    const isPicture = () => {
        if(props.question.includes('img')) {
            setIsQuestionPicture(true);
            return <ImageQuestion url={props.question} />
        } else {
            return false;
        }
    }

    const showAnswer = () => {
        props.handleShowAnswer();
        setModalShow(true);
    }

    const handleCloseAnswer = () => {
        setModalShow(false);
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{fontSize: '35px'}}>{props.points} очков.</h1>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{fontSize: '35px', fontWeight: 'bold'}}>{isQuestionPicture ? <ImageQuestion url={props.question} /> : props.question }</div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={() => showAnswer()}>Ответ!</Button>
                <Button onClick={props.onHide}>Close</Button>
                
                </Modal.Footer>
            </Modal>
            <AnswerModal show={modalShow} onHide={() => setModalShow(false)} answer={props.answer} resolveQuestion={props.resolveQuestion} onResolveQuestion={props.onResolveQuestion} id={props.id} points={props.points}/>
            
        </div>
      
    );
  }

  export default QuestionModal;