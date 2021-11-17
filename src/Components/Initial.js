import React, { useState } from 'react';
import InitAnimation from './InitAnimation';

function Initial( props ){
  const [ currentQ, setCurrentQ ] = useState('')

  function handleChange( event ) {
    setCurrentQ( event.target.value )
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.updateQuestion( currentQ )
    props.updateToShuffling()
  }

  return (
      <div className="initial">
        <InitAnimation/>
        <div className="header content-header">
        What would you like to know? 
        </div>

        <form>
          <div className="input-question">
            <input 
              value={ currentQ } 
              type="text" 
              className ='input' 
              placeholder='Enter your question here...'
              onChange={ handleChange }
            />
            <div className="button">
              <button className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
            </div>
          </div>
        </form>
        <img src={'./assets/tarot_symbols1.png'} alt=""/>
      </div>
  )
}
 
export default Initial;