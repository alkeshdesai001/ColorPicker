import React from 'react';

import ColorBox from './colorBox/ColorBox';

import './Palette.css';

const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
  ));

  return (
    <div className='Palette'>
      {/* Navbar */}
      <div className='PaletteColors'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
