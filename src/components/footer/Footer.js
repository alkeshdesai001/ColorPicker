import React from 'react';

import classes from './Footer.module.scss';

const Footer = ({ paletteName, emoji }) => (
  <div className={classes.Footer}>
    <span>{paletteName}</span>
    <span className={classes.Emoji}>{emoji}</span>
  </div>
);

export default Footer;
