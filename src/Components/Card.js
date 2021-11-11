import React from 'react';
 
function Card( props ) {

    const heading = props.heading ? props.heading : 'Time';
    const image = props.image ? 'images/' + props.image + '.jpg' : 'images/Cups01.jpg';
    const altText = props.altText ? props.altText : 'Ace of Cups';

  return (
    <div className="card">
        <h2>{heading}</h2>
        <img src={ image } alt = { altText }/>
    </div>
  );
}
 
export default Card;