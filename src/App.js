import React from 'react';

import Menu from './Menu';
import Genres from './Genres';
import Movies from './Movies';

function App() {
  return (
    <div className="app">
      <Menu />
      <Genres />
      <Movies />
    </div>
  );
}

export default App;
