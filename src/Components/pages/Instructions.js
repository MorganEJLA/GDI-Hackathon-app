import React from 'react'

function Instructions() {
  return (
    <div>
      <h2>Instructions</h2>
      <p>
        <i>This app is for entertainment purposes only. It is to showcase skills used to make an interactive app for those interested in learning more about tarot.</i>
      </p>
      <p>
        Our Tarot Reading App is a fun introduction to tarot through a simple three card spread representing the past, present and future. 
      </p>
      <p>
        The user will input a question and the app will shuffle a deck of cards and reveal a three card spread. 
      </p>
      <p>
        The general meaning of the cards will be displayed and can be intrepeted by the user, who can then ask another question for themselves or a friend!
      </p>
      <h2>Reading the Cards</h2>
      <p>
        This app is using the Three Card Spread which can represent the Past, Present and Future. When presented with your cards, use the following as a reference for reading the spread as related to your question. 
      </p>
      <p>
        <strong>Past:</strong>
        <br/>
        This represents any past influences, that can either propel you or block you. Lessons learned or lessons that need to be revisted. 
      </p>
      <p>
        <strong>Present:</strong>
        <br/>
        Present: This represents you and environment. Where you are right now.  
      </p>
      <p>
        <strong>Future:</strong>
        <br/>
        Outcome; the culmination of the energy of the first two cards. 
      </p>
      <a href='/'>Return Home</a>
    </div>
  )
}

export default Instructions
