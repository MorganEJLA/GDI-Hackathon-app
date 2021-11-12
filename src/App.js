import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Initial from './Components/Initial';
import Shuffling from './Components/Shuffling';
import ShowCards from './Components/ShowCards';

function App() {

  const [ appState, setAppState ] = useState( 'initial' ); // options are initial, shuffling, results
  const [ chosenCards, setChosenCards ] = useState( [ 0, 0, 0] );
  const [ question, setQuestion ] = useState('')
  const [ facingUp, setFacingUp ] = useState( [ true, true, true ] );

  const updateToShuffling = (  ) => setAppState( 'shuffling' );

  const updateToResults = (  ) => {
    let tempCards = [];
    while ( tempCards.length < 3 ) {
    const newCard = Math.floor( Math.random() * 78 );
    if ( ! tempCards.includes(newCard) ) {
        tempCards.push(newCard);
      };
    }

    let tempFacingUp = [true, true, true];

    for (let i=0; i<3; i++){
        let number = Math.floor( Math.random() * 100 );
        if ( number < 15 ){
          tempFacingUp[i] = false;
        }
    }
    setChosenCards( tempCards );
    setFacingUp( tempFacingUp );
    setAppState( 'results' );
  }

  const updateToInitial = () => setAppState( 'initial' );

  let currentScreen =  (
    <Initial 
      updateToShuffling = { updateToShuffling }
      updateQuestion = { setQuestion }
      />
  );

  if ( appState === 'shuffling') {
    currentScreen = <Shuffling onClick = { updateToResults } />;
  } else if (appState === 'results') {
     currentScreen = <ShowCards 
      onClick = { updateToInitial } 
      cards={ chosenCards }
      facingUp = { facingUp }
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
