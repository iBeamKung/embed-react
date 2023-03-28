import React from 'react';

import Home from './pages';

import Snowfall from 'react-snowfall'
import './App.css';

function App() {
  return (
    <div>
      <Home />
      <Snowfall snowflakeCount={10} />
    </div>
  );
}

export default App;
