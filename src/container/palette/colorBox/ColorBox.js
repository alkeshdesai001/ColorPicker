import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import classes from './ColorBox.module.scss';

const ColorBox = ({ background, name, cid, pid, singleColorPalette }) => {
  const [copied, setCopied] = useState(false);

  const setCopyHandler = () => setCopied(true);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => setCopied(false), 1500);
    }
  }, [copied]);

  const classShow = copied && classes.Show;

  let titleTextColor =
    chroma(background).luminance() >= 0.14 ? 'black' : 'white';
  let copyTextColor =
    chroma(background).luminance() >= 0.55 ? '#434953' : 'white';

  return (
    <CopyToClipboard text={background} onCopy={() => setCopyHandler()}>
      <div
        style={{
          background: background,
          height: singleColorPalette ? '50%' : '25%',
        }}
        className={classes.ColorBox}
      >
        <div
          style={{ background }}
          className={[classes.CopyOverlay, classShow].join(' ')}
        />
        <div
          style={{ background }}
          className={[classes.CopyMsg, classShow].join(' ')}
        >
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className={classes.CopyContainer}>
          <div style={{ color: titleTextColor }} className={classes.BoxContent}>
            <span>{name}</span>
          </div>
          <button
            style={{ color: copyTextColor }}
            className={classes.CopyButton}
          >
            Copy
          </button>
        </div>
        {!singleColorPalette && (
          <Link to={`/palette/${pid}/${cid}`}>
            <span style={{ color: copyTextColor }} className={classes.SeeMore}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
