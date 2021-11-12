import React from 'react';
import ShuffleAnimation from './ShuffleAnimation';

function Shuffling( props ){

  return (
    <div className="shuffling">
      <div>
        <ShuffleAnimation />
      </div>
      <div className="shuffle-button">
        <button className="btn btn-primary" onClick={ props.onClick }>End Shuffle</button>
      </div>
    </div>
  )
}
 
export default Shuffling;