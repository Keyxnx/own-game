import React from 'react';


const Field = ({ points, question, answers }) => {


    const style = {
        width: 'calc(100% / 7)',
        height: 'auto',
        background: 'green',
        border: '1px solid black'
    }
    return (
        <div className="field" style={style}>
           {points}
        </div>
    );
}

export default Field;
