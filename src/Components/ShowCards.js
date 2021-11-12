import React from 'react';
import Description from './Description';
import Card from './Card';
import cards, { imageFiles } from '../cards';

function ShowCards( props ){

    const question = props.question ? '' + props.question : '';

    let chosenCards = props.cards ? props.cards : [ 2, 2, 2];
    let facingUp = props.facingUp ? props.facingUp : [true, true, true ];

    return (
        <div className="show-cards">
            <h1 className='header content-header'>Your reading...</h1>
            <div className="question-result">
              { question } 
            </div>
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
            <br/>
            <Description 
                className="card-desc"
                heading="Past"
                description={ cards[chosenCards[0]].desc}
                meaning={ facingUp[0] ? cards[chosenCards[0]].meaning_up : cards[chosenCards[0]].meaning_rev }
            />
            <br/>
            <Description 
                className="card-desc"
                heading="Present"
                description={ cards[chosenCards[1]].desc}
                meaning={ facingUp[1] ? cards[chosenCards[1]].meaning_up : cards[chosenCards[1]].meaning_rev }
            />
            <br/>
            <Description 
                className="card-desc"
                heading="Future"
                description={ cards[chosenCards[2]].desc}
                meaning={ facingUp[2] ? cards[chosenCards[2]].meaning_up : cards[chosenCards[2]].meaning_rev }
            />
            <br/>
            <div className='another-reading'>
            <h2>Do you want another reading?</h2>
            <button className="btn btn-primary" onClick={ props.onClick }>Try Again</button>
            </div>
        </div>
    )
}
 
export default ShowCards;