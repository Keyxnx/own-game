import { useState } from 'react';
import Field from '../Field/Field';

const style = {
    width: '80%',
    height: '65px',
    background: 'green',
    margin: '0 auto',
    background: '#FAEDC6',
    border: '1px solid black',
    display: 'flex'
}

const Fields = ({ categoryQuestions, setPlayersPoints }) => {
    const [inActiveIds, setInActiveIds] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState('');

    const resolveQuestion = (id, points) => () => {
        if (id) {
            setInActiveIds(prevIds => ([
                ...prevIds,
                id
            ]));
            setPlayersPoints(points)
        }
    }


    return (
        <div className="fields" style={style}>
            {categoryQuestions.map(category => {
                return <Field key={category.id} {...category} resolveQuestion={resolveQuestion(category.id, category.points)} isInActive={inActiveIds.includes(category.id)} />
            })}
        </div>
    );
}

export default Fields;
