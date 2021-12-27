import { useState, useEffect } from 'react';
import Field from '../Field/Field';
import { questions, points } from '../../utils/constants';

const Fields = ({amountOfFields}) => {

    const [amountOfQuestions, setAmountOfQuestions] = useState(Array(amountOfFields.length).fill(undefined));
    // const [quest, setQuest] = useState([]);
    // const [answr, setAnswr] = useState([]);

    useEffect(() => {
        uuu();
    }, []);

    function uuu() {
        for (let key in questions) {
            const categoryQuestions = [];
            const categoryAnswers = [];
            questions[key].map(item => {

                categoryQuestions.push(item.question);
                categoryAnswers.push(item.answer);
            })
            
            // setQuest([...categoryQuestions])
            // setAnswr([...categoryAnswers])
            return (
                <Field question={[...categoryQuestions]} answers={[...categoryAnswers]} key={Math.random()} />
            )
        }
    }

    const style = {
        width: '80%',
        height: '65px',
        background: 'green',
        margin: '0 auto',
        background: '#FAEDC6',
        border: '1px solid black',
        display: 'flex'
    }
    return (
        <div className="fields" style={style}>
            { amountOfQuestions.map((item, index) => {
                uuu();
            })}
        </div>
    );
}

export default Fields;
