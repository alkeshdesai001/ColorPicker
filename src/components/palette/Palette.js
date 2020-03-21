import React from 'react';

import ColorBox from './colorBox/ColorBox';

import './Palette.css';

const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
  ));

  return (
    <div className='palette'>
      {/* Navbar */}
      <div className='palette-colors'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
