import React from "react";
import PropTypes from 'prop-types';

const Summary = ({ ingredients=0, steps=0, title='[recipe]' }) => {
    return <div>
        <h6>{title}</h6>
        <p>{ingredients} Ingredients | {steps} Steps</p>
    </div>
}
Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error('The title must be a string') : 
                props[propName].length > 30 ?
                 new Error('Title is too long, cannot be over 30 characters') : 
                 null
}

export default Summary