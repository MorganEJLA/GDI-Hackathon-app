import React, { useState, useEffect } from 'react';
import Description from '../components/Description';
import Card from '../components/Card';
import cards, { imageFiles } from '../cards';

function ShowCards( props ){

    // TODO -- remove, just for testing
    const question = props.question ? 'about: ' + props.question : 'about: Will I be a successful developer?';

    const [ chosenCards, setChosenCards ] = useState([ 2, 34, 41]);

    if (chosenCards.length > 2){
        console.log(chosenCards);
console.log(chosenCards[0]);
console.log(cards[chosenCards[0]]);
console.log(imageFiles[cards[chosenCards[0]]]);
console.log(imageFiles[cards[chosenCards[0]].name_short] );
    }

    // TODO -- move random card selection to proper place once available and remove useEffect
    useEffect(() => {

        let tempCards = [];

        while ( tempCards.length < 3 ){
            const newCard = Math.floor( Math.random() * 78 );
            if ( ! tempCards.includes(newCard) ) {
                tempCards.push(newCard);
            };
        }

        setChosenCards(tempCards);
      }, []);

     const getImage = ( index ) => {
         return chosenCards[index] !== undefined ? imageFiles[cards[chosenCards[index]]] + '.jpg' : '';
     }

    return (
        <div className="show-cards">
            <h1>Your reading {question} </h1>
            <div className="cards-display">
                <Card 
                    heading="Past" 
                    image={ imageFiles[cards[chosenCards[0]].name_short] }
                    altText={ cards[chosenCards[0]].name }
                />
                <Card 
                    heading="Present" 
                    image={ imageFiles[cards[chosenCards[1]].name_short] }
                    altText={ cards[chosenCards[1]].name }
                />
                <Card 
                    heading="Future" 
                    image={ imageFiles[cards[chosenCards[2]].name_short] }
                    altText={ cards[chosenCards[2]].name }
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
        </div>
    )
}
 
export default ShowCards;