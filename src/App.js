import './App.css';
import React, { useState, useEffect } from 'react';
import Initial from './Components/Initial';
import Shuffling from './Components/Shuffling';
import ShowCards from './Components/ShowCards';

function App() {

  const [ appState, setAppState ] = useState('initial'); // options are initial, shuffling, results

  let currentScreen =  <Initial/>;

  if ( appState === 'shuffling') {
    currentScreen = <Shuffling/>;
  } else if (appState === 'results') {
     currentScreen = <ShowCards/>;
  }

  return (
    <div className="App">
      {currentScreen}
    </div>
  );
}

export default App;
