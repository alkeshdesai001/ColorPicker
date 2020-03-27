import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import DropDown from '../utils/DropDown';

import './Navbar.css';

const Navbar = ({
  sliderState,
  setSliderState,
  colorCode,
  handleColorCode
}) => (
  <div className='Navbar'>
    <div className='Logo'>
      <Link to='/'>Color Picker</Link>
    </div>
    {sliderState && (
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
    )}
    <div className='DropDown'>
      <DropDown colorCode={colorCode} handleColorCode={handleColorCode} />
    </div>
  </div>
);

export default Navbar;
