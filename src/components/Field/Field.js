import { useState, useEffect } from 'react';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import cx from 'classnames';

import './styles.css'

const style = {
    fontSize: '25px',
    width: 'calc(100% / 7)',
    height: 'auto',
    border: '1px solid black'
}

const Field = ({ id, points, question, answer, resolveQuestion, isInActive }) => {

    const [modalShow, setModalShow] = useState(null);

    const fieldClass = cx('field', {
        inActiveField: isInActive
    })

    const handleOpenQuestion = () => {
        setModalShow(true)
    }

    const handleShowAnswer = () => {
        setModalShow(false);
    }

    return (
        <div className={fieldClass} style={style}>
            <button className='fieldButton' onClick={() => handleOpenQuestion()}>
                {points}
            </button>

            <QuestionModal show={modalShow} onHide={() => setModalShow(false)} resolveQuestion={resolveQuestion} handleShowAnswer={handleShowAnswer} points={points} question={question} answer={answer} id={id} points={points}/>
        </div>
    );
}

export default Field;
