import React from 'react';
//import Button from './Components/Button';

function Shuffling( props ){

    return (
        <div className="shuffling">
            <h1>Morgan's awesome animation here</h1> 
            <button onClick={ props.onClick }></button>   
        </div>
    )
}
 
export default Shuffling;