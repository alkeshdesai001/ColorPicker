import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ColorBox from './colorBox/ColorBox';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Snackbar from '../../components/utils/Snackbar';

import './Palette.css';

const SingleColorPalette = props => {
  const { cid } = useParams();
  const { palette } = props;

  const [colorCode, setColorCode] = useState('hex');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => setOpenSnackbar(false);

  const handleColorCode = e => {
    setColorCode(e.target.value);
    setOpenSnackbar(true);
  };

  let singlePalette = [];
  for (let key in palette.colors) {
    let color = palette.colors[key].find(col => col.id === cid);
    singlePalette.push(color);
  }

  singlePalette = singlePalette.splice(1);

  console.log(palette, singlePalette);

  const colorBoxes = singlePalette.map(color => (
    <ColorBox
      key={color.name}
      cid={color.id}
      pid={props.palette.id}
      background={color[colorCode]}
      name={color.name}
      singlePalette={true}
    />
  ));

  return (
    <div className='Palette'>
      <Navbar colorCode={colorCode} handleColorCode={handleColorCode} />
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

export default SingleColorPalette;
