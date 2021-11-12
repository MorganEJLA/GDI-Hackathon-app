import React from 'react';
import Description from './Description';
import Card from './Card';
import cards, { imageFiles } from '../cards';

function ShowCards( props ){

    const question = props.question ? 'about: ' + props.question : '';

    let chosenCards = props.cards ? props.cards : [ 2, 2, 2];
    let facingUp = props.facingUp ? props.facingUp : [true, true, true ];

    return (
        <div className="show-cards">
            <h1>Your reading { question } </h1>
            <div className="cards-display">
                <Card 
                    heading="Past" 
                    image={ imageFiles[cards[chosenCards[0]].name_short] }
                    name={ cards[chosenCards[0]].name }
                    facingUp= { facingUp[0] }
                />
                <Card 
                    heading="Present" 
                    image={ imageFiles[cards[chosenCards[1]].name_short] }
                    name={ cards[chosenCards[1]].name }
                    facingUp= { facingUp[1] }
                />
                <Card 
                    heading="Future" 
                    image={ imageFiles[cards[chosenCards[2]].name_short] }
                    name={ cards[chosenCards[2]].name }
                    facingUp= { facingUp[2] }
                />
            </div>
            <Description 
                heading="Past"
                description={ cards[chosenCards[0]].desc}
                meaning={ facingUp[0] ? cards[chosenCards[0]].meaning_up : cards[chosenCards[0]].meaning_rev }
            />
            <Description 
                heading="Present"
                description={ cards[chosenCards[1]].desc}
                meaning={ facingUp[1] ? cards[chosenCards[1]].meaning_up : cards[chosenCards[1]].meaning_rev }
            />
            <Description 
                heading="Future"
                description={ cards[chosenCards[2]].desc}
                meaning={ facingUp[2] ? cards[chosenCards[2]].meaning_up : cards[chosenCards[2]].meaning_rev }
            />
            <button className="btn btn-primary" onClick={ props.onClick }>Start Over</button>
        </div>
    )
}
 
export default ShowCards;