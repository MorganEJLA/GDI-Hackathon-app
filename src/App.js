import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Initial from './Components/Initial';
import Shuffling from './Components/Shuffling';
import ShowCards from './Components/ShowCards';

function App() {

  const [ appState, setAppState ] = useState('initial'); // options are initial, shuffling, results
  const [ chosenCards, setChosenCards ] = useState([ 0, 0, 0]);
  const [ question, setQuestion ] = useState('')

  const updateToShuffling = (  ) => setAppState( 'shuffling' );

  const updateToResults = (  ) => {
    let tempCards = [];
    while ( tempCards.length < 3 ) {
    const newCard = Math.floor( Math.random() * 78 );
    if ( ! tempCards.includes(newCard) ) {
        tempCards.push(newCard);
      };
    }
    setChosenCards(tempCards);
    setAppState( 'results' );
  }



  const updateToInitial = (  ) => setAppState( 'initial' );

  let currentScreen =  (
    <Initial 
      updateToShuffling = { updateToShuffling }
      updateQuestion = { setQuestion } />
  );

  if ( appState === 'shuffling') {
    currentScreen = <Shuffling onClick = { updateToResults } />;
  } else if (appState === 'results') {
     currentScreen = <ShowCards 
      onClick = { updateToInitial } 
      cards={ chosenCards }
      question = { question } 
    />;
  }

  return (
    <div className="App">
      <Header />
      {currentScreen}
    </div>
  );
}

export default App;
