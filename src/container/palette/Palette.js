import React, { useState } from 'react';

import ColorBox from './colorBox/ColorBox';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import Snackbar from '../../components/utils/Snackbar';

import './Palette.css';

const Palette = props => {
  const [sliderState, setSliderState] = useState(500);
  const [colorCode, setColorCode] = useState('hex');

  const colorBoxes = props.palette.colors[sliderState].map(color => (
    <ColorBox key={color.id} background={color[colorCode]} name={color.name} />
  ));

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setOpenSnackbar(false);
  };

  const handleColorCode = e => {
    setColorCode(e.target.value);
    setOpenSnackbar(true);
  };

  return (
    <div className='Palette'>
      <Navbar
        sliderState={sliderState}
        setSliderState={setSliderState}
        colorCode={colorCode}
        handleColorCode={handleColorCode}
      />
      <Snackbar
        openSnackbar={openSnackbar}
        handleClose={handleClose}
        messageInfo={`Color format is changed to ${colorCode.toUpperCase()}`}
      />
      <div className='PaletteColors'>{colorBoxes}</div>
      <Footer
        paletteName={props.palette.paletteName}
        emoji={props.palette.emoji}
      />
    </div>
  );
};

export default Palette;
