import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

const ColorBox = ({ background, name }) => (
  <CopyToClipboard text={background}>
    <div style={{ background }} className='ColorBox'>
      <div className='CopyContainer'>
        <div className='BoxContent'>
          <span>{name}</span>
        </div>
        <button className='CopyButton'>Copy</button>
      </div>
      <span className='SeeMore'>MORE</span>
    </div>
  </CopyToClipboard>
);

export default ColorBox;
