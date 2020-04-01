import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ColorBox from './colorBox/ColorBox';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Snackbar from '../../components/utils/Snackbar';

import './Palette.css';

const Palette = props => {
  const { palette } = props;
  const singleColorPalette = props.singleColorPalette;

  const { cid } = useParams();

  const [sliderState, setSliderState] = useState(500);
  const [colorCode, setColorCode] = useState('hex');
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

  let colorBoxes = null;

  if (singleColorPalette) {
    let singlePalette = [];
    for (let key in palette.colors) {
      let color = palette.colors[key].find(col => col.id === cid);
      singlePalette.push(color);
    }

    singlePalette = singlePalette.splice(1);

    console.log(palette, singlePalette);

    colorBoxes = singlePalette.map(color => (
      <ColorBox
        key={color.name}
        cid={color.id}
        pid={props.palette.id}
        background={color[colorCode]}
        name={color.name}
        singleColorPalette={singleColorPalette}
      />
    ));
  } else {
    colorBoxes = props.palette.colors[sliderState].map(color => (
      <ColorBox
        key={color.id}
        cid={color.id}
        pid={props.palette.id}
        background={color[colorCode]}
        name={color.name}
        singleColorPalette={singleColorPalette}
      />
    ));
  }

  return (
    <div className='Palette'>
      <Navbar
        sliderState={singleColorPalette ? null : sliderState}
        setSliderState={singleColorPalette ? null : setSliderState}
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
