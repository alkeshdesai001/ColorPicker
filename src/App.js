import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Palette from './container/palette/Palette';
import SingleColorPalette from './container/palette/SingleColorPalette';
import seedColors from './data/seedColors';
import { generatePalette } from './components/helper/ColorHelper';

import './App.css';

const App = () => {
  const home = seedColors.map(palette => {
    return (
      <p>
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      </p>
    );
  });

  const findPalette = id => {
    return seedColors.find(palette => palette.id === id);
  };

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            {home}
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
              <SingleColorPalette
                palette={generatePalette(findPalette(match.params.pid))}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
