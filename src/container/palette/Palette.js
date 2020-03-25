import React, { useState } from 'react';

import ColorBox from './colorBox/ColorBox';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import './Palette.css';

const Palette = props => {
  const [sliderState, setSliderState] = useState(500);

  const colorBoxes = props.palette.colors[sliderState].map(color => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ));

  return (
    <div className='Palette'>
      <Navbar sliderState={sliderState} setSliderState={setSliderState} />
      <div className='PaletteColors'>{colorBoxes}</div>
      <Footer
        paletteName={props.palette.paletteName}
        emoji={props.palette.emoji}
      />
    </div>
  );
};

export default Palette;
