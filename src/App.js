import React from 'react';

import Home from './pages';

import Snowfall from 'react-snowfall'
import './App.css';

function App() {
  return (
    <div>
      <Home />
      <Snowfall 
        snowflakeCount={500}
        speed={[0,0]}
        style={{ opacity: 0.1 }}
      />
    </div>
  );
}

export default App;
