import React from 'react';

import './Footer.css';

const Footer = ({ paletteName, emoji }) => (
  <div className='Footer'>
    <span>{paletteName}</span>
    <span className='Emoji'>{emoji}</span>
  </div>
);

export default Footer;
