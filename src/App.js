import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import seedColors from './data/seedColors';
import Spinner from './components/utils/Spinner';
import { generatePalette } from './components/helper/ColorHelper';
import Palette from './container/palette/Palette';
import PaletteList from './components/paletteList/PaletteList';
import Drawer from './container/drawer/Drawer';

import axios from './axios-colors';

import './App.scss';

const App = () => {
  const [newColors, setNewColors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/seedColors.json')
      .then((res) => {
        let data = res.data;
        if (!!data) {
          let newColorsArray = [];
          for (let key in data) {
            newColorsArray = newColorsArray.concat(data[key]);
          }
          setNewColors(newColorsArray);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const findPalette = (id) => {
    return newColors.find((palette) => palette.id === id);
  };

  return (
    <Router>
      <div className='App'>
        {loading && <Spinner />}
        <Switch>
          <Route path='/palette/new' exact render={({ match }) => <Drawer />} />
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
          <Route path='/' exact>
            <PaletteList seedColors={newColors} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
