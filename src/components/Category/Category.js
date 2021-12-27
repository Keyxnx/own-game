import React from 'react';

const Category = ({ title }) => {

    const style = {
        width: '200px',
        height: '65px',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="category" style={style}>
            { title }
        </div>
    );
}

export default Category;
