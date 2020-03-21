import React from 'react';

import './ColorBox.css';

const ColorBox = props => (
  <div style={{ backgroundColor: props.background }} className='colorBox'>
    <span>{props.name}</span>
    <span>MORE</span>
  </div>
);

export default ColorBox;
