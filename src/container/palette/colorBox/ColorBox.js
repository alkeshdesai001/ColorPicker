import React, { useState, useEffect } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  const setCopyHandler = () => setCopied(true);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={() => setCopyHandler()}>
      <div style={{ background }} className='ColorBox'>
        <div
          style={{ background }}
          className={`CopyOverlay ${copied && 'Show'}`}
        />
        <div style={{ background }} className={`CopyMsg ${copied && 'Show'}`}>
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className='CopyContainer'>
          <div className='BoxContent'>
            <span>{name}</span>
          </div>
          <button className='CopyButton'>Copy</button>
        </div>
        <span className='SeeMore'>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
