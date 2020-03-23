import React from 'react';

import Palette from './container/palette/Palette.js';
import seedColors from './data/seedColors';
import { generatePalette } from './components/helper/ColorHelper';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
