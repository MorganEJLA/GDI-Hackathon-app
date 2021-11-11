import React, { useState, useEffect } from 'react';
import Description from './Description';
import Card from './Card';
import cards, { imageFiles } from '../cards';

function ShowCards( props ){

    // TODO -- remove, just for testing
    const question = props.question ? 'about: ' + props.question : 'about: Will I be a successful developer?';

    let chosenCards = props.cards ? props.cards : [ 2, 2, 2];

    return (
        <div className="show-cards">
            <h1>Your reading {question} </h1>
            <div className="cards-display">
                <Card 
                    heading="Past" 
                    image={ imageFiles[cards[chosenCards[0]].name_short] }
                    name={ cards[chosenCards[0]].name }
                />
                <Card 
                    heading="Present" 
                    image={ imageFiles[cards[chosenCards[1]].name_short] }
                    name={ cards[chosenCards[1]].name }
                />
                <Card 
                    heading="Future" 
                    image={ imageFiles[cards[chosenCards[2]].name_short] }
                    name={ cards[chosenCards[2]].name }
                />
            </div>
            <Description 
                heading="Past"
                description={ cards[chosenCards[0]].desc}
                meaning={ cards[chosenCards[0]].meaning_up}
            />
            <Description 
                heading="Present"
                description={ cards[chosenCards[1]].desc}
                meaning={ cards[chosenCards[1]].meaning_up}
            />
            <Description 
                heading="Future"
                description={ cards[chosenCards[2]].desc}
                meaning={ cards[chosenCards[2]].meaning_up}
            />
            <button onClick={props.onClick}></button>
        </div>
    )
}
 
export default ShowCards;