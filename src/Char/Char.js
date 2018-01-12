import React from 'react';

import './Char.css';

const char = (props) => {
  return (
    <span className="Char">{props.char}</span>
  )
};

export default char;