import React from 'react';
//import Button from './Components/Button';

function Shuffling( props ){

    return (
        <div className="shuffling">
            <h1>Morgan's awesome animation here</h1> 
            <button className="btn btn-primary" onClick={props.onClick}>End Shuffle</button>
        </div>
    )
}
 
export default Shuffling;