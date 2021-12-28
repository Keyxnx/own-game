import React from 'react';
import cx from 'classnames';

import './styles.css'

const style = {
    width: 'calc(100% / 7)',
    height: 'auto',
    border: '1px solid black'
}

const Field = ({ points, question, answer, resolveQuestion, isInActive }) => {

    const fieldClass = cx('field', {
        inActiveField: isInActive
    })

    return (
        <div className={fieldClass} style={style}>
            <button onClick={resolveQuestion} className='fieldButton'>
                {points}
            </button>
        </div>
    );
}

export default Field;
