import React from 'react';
 
function Description( props ){

    const heading = props.heading ? props.heading : 'Awesome Heading';
    const meaning = props.meaning ? props.meaning : 'Meaning';

    return (
        <div className="description">
            <h2>{ heading }</h2>
            <div className="tarot-meaning">
                { meaning }
            </div>
        </div>)
}
 
export default Description;