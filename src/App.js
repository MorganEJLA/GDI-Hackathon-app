import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Initial from './Components/Initial';
import Shuffling from './Components/Shuffling';
import ShowCards from './Components/ShowCards';

// test Button added along with bootstrap core styling, feel free to remove - jules

function App() {

  const [ appState, setAppState ] = useState('initial'); // options are initial, shuffling, results

  return (
    <div className="App">
      <Initial/>
      <Shuffling/>
      <ShowCards />
      <Button variant="dark">Dark Test Button</Button>{' '}
    </div>
  );
}

export default App;
