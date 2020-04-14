import React from 'react';
import MiniPalette from './miniPalette/MiniPalette';
import { Link } from 'react-router-dom';

import classes from './PaletteList.module.scss';

const PaletteList = ({ seedColors }) => (
  <div className={classes.PaletteList}>
    <div className={classes.Container}>
      <nav className={classes.Nav}>
        <h1 className={classes.Title}>React Colors</h1>
        <Link to='/palette/new'>New Palette</Link>
      </nav>
      <div className={classes.Palette}>
        {seedColors.map((palette) => (
          <MiniPalette key={palette.paletteName} {...palette} />
        ))}
      </div>
    </div>
  </div>
);
export default PaletteList;
