import React from 'react';
import MiniPalette from './miniPalette/MiniPalette';

import { withStyles } from '@material-ui/core/styles';
import styles from './PaletteListStyle';

const PaletteList = ({ classes, seedColors }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <nav className={classes.nav}>
        <h1 className={classes.title}>React Colors</h1>
      </nav>
      <div className={classes.palette}>
        {seedColors.map(palette => (
          <MiniPalette key={palette.paletteName} {...palette} />
        ))}
      </div>
    </div>
  </div>
);
export default withStyles(styles)(PaletteList);
