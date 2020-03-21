import React from 'react';

import Palette from './components/palette/Palette.js';
import seedColors from './data/seedColors';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
