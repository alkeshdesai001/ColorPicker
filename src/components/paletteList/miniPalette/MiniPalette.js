import React from 'react';

import { Link } from 'react-router-dom';
import classes from './MiniPalette.module.scss';

const MiniPalette = ({ id, paletteName, emoji, colors }) => {
  const colorBoxes = colors.map((color) => (
    <div
      key={color.name}
      style={{ backgroundColor: color.color }}
      className={classes.ColorBoxes}
    />
  ));
  return (
    <Link className={classes.Link} to={`/palette/${id}`}>
      <div className={classes.MiniPalette}>
        <div className={classes.Colors}>{colorBoxes}</div>
        <h5 className={classes.Title}>
          {paletteName} <span className={classes.Emoji}>{emoji}</span>
        </h5>
      </div>
    </Link>
  );
};

export default MiniPalette;
