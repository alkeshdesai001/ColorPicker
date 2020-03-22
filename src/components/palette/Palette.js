import React, { useState } from 'react';

import ColorBox from './colorBox/ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Palette.css';

const Palette = props => {
  const [sliderState, setSliderState] = useState(500);

  const colorBoxes = props.palette.colors[sliderState].map(color => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  return (
    <div className='Palette'>
      <Slider
        defaultValue={sliderState}
        step={100}
        min={100}
        max={900}
        onAfterChange={v => setSliderState(v)}
      />
      {/* Navbar */}
      <div className='PaletteColors'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
