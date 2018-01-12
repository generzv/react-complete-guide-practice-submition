import React from 'react';

const validate = (props) => {
    const inputIs = (props.length < 6) ? 'Text too short' : 'Text long enough';
    return (
        <p>{inputIs}</p>
    )
};

export default validate;