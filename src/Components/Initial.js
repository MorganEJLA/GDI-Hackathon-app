import React, { useState } from 'react';

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
        <div className="question">
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
      </div>
  )
}
 
export default Initial;