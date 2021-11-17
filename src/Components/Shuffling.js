import React from 'react';
import ShuffleAnimation from './ShuffleAnimation';

function Shuffling( props ){

  return (
    <div className="shuffling">
      <div className="shuffle-button" style={{position:"relative", zIndex:"10"}}>
        <button className="btn btn-primary" onClick={ props.onClick }>End Shuffle</button>
      </div>
      <div>
        <ShuffleAnimation />
      </div>
    </div>
  )
}
 
export default Shuffling;