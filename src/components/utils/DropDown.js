import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const DropDown = ({ colorCode, handleColorCode }) => (
  <Select
    labelId='label'
    id='select'
    value={colorCode}
    onChange={handleColorCode}
  >
    <MenuItem value='hex'>Hex #ffffff</MenuItem>
    <MenuItem value='rgb'>RGB(255,255,255)</MenuItem>
    <MenuItem value='rgba'>RGBA(255,255,255,1.0)</MenuItem>
  </Select>
);

export default DropDown;
