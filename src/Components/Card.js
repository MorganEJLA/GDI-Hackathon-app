import React from 'react';
 
function Card( props ) {

    const heading = props.heading ? props.heading : 'Whatever time';
    const image = props.image ? 'images/' + props.image + '.jpg' : 'images/Cups01.jpg';
    const altText = props.altText ? props.altText : 'Ace of Cups';

    console.log(image);
 
  return (
    <div className="card">
        <h2>{heading}</h2>
        <img src={ image } alt = { altText }/>
    </div>
  );
}
 
export default Card;