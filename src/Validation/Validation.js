import React from 'react';

const validate = (props) => {
    const inputIs = (props.length < 6) ? 'Text too short' : (props.length > 10) ? 'Text too long' : null;
    return (
        <p>{inputIs}</p>
    )
};

export default validate;