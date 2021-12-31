import { useState } from 'react';

import Field from '../Field/Field';

const style = {
    width: '80%',
    height: '65px',
    margin: '0 auto',
    background: '#FFF7E0',
    display: 'flex'
}

const Fields = ({ categoryQuestions, setPlayersPoints, onResolveQuestion }) => {
    const [inActiveIds, setInActiveIds] = useState([]);


    const resolveQuestion = (id, points, isCorrect) => {

        if (id) {
            setInActiveIds(prevIds => ([
                ...prevIds,
                id
            ]));
            setPlayersPoints(points, isCorrect);
        }
    }


    return (
        <div className="fields" style={style}>
            {categoryQuestions.map(category => {
                return <Field key={category.id} {...category} resolveQuestion={resolveQuestion} isInActive={inActiveIds.includes(category.id)} onResolveQuestion={onResolveQuestion} />
            })}
        </div>
    );
}

export default Fields;
