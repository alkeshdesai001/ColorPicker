import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Palette from './container/palette/Palette';
import seedColors from './data/seedColors';
import { generatePalette } from './components/helper/ColorHelper';

import PaletteList from './components/paletteList/PaletteList';

import './App.scss';

const App = () => {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <PaletteList seedColors={seedColors} />
          </Route>
          <Route
            path='/palette/:pid'
            exact
            render={({ match }) => (
              <Palette
                palette={generatePalette(findPalette(match.params.pid))}
              />
            )}
          />
          <Route
            path='/palette/:pid/:cid'
            exact
            render={({ match }) => (
              <Palette
                palette={generatePalette(findPalette(match.params.pid))}
                singleColorPalette={true}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
