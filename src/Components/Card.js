import React from 'react';
 
function Card( props ) {

    const heading = props.heading ? props.heading : 'Time';
    const image = props.image ? 'images/' + props.image + '.jpg' : 'images/Cups01.jpg';
    const name = props.name ? props.name : 'Ace of Cups';

  return (
    <div className="card">
        <h2>{heading}</h2>
        <img src={ image } alt = { name }/>
        <div className="card-name">{ name }</div>
    </div>
  );
}
 
export default Card;