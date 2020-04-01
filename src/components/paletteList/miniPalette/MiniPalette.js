import React from 'react';

import { Link } from 'react-router-dom';
import styles from './MiniPaletteStyle';
import { withStyles } from '@material-ui/core/styles';

const MiniPalette = ({ classes, id, paletteName, emoji, colors }) => {
  const colorBoxes = colors.map(color => (
    <div
      key={color.name}
      style={{ backgroundColor: color.color }}
      className={classes.colorBoxes}
    />
  ));
  return (
    <Link className={classes.link} to={`/palette/${id}`}>
      <div className={classes.root}>
        <div className={classes.colors}>{colorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </Link>
  );
};

export default withStyles(styles)(MiniPalette);
