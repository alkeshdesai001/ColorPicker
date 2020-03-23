import React from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Navbar.css';

const Navbar = ({ sliderState, setSliderState }) => (
  <div className='Navbar'>
    <div className='Logo'>
      <a href='#!'>Color Picker</a>
    </div>
    <div className='SliderContainer'>
      <span>Level: {sliderState}</span>
      <div className='Slider'>
        <Slider
          defaultValue={sliderState}
          step={100}
          min={100}
          max={900}
          onAfterChange={value => setSliderState(value)}
        />
      </div>
    </div>
  </div>
);

export default Navbar;
