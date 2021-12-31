import { Button, Modal } from 'react-bootstrap';

const AnswerModal = (props) => {

    const gotAnswer = (isCorrect) => {
        props.resolveQuestion(props.id, props.points, isCorrect);
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Ответ:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1>{props.answer}</h1>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={() => ({gotAnswer: gotAnswer(false), hideModal: props.onHide()})}>Неправильно</Button>
            <Button variant="success" onClick={() => ({gotAnswer: gotAnswer(true), hideModal: props.onHide()})}>Правильно</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AnswerModal;