import React, { useState, useEffect } from 'react';
// import Question from './Question'

function Initial( props ){

    return (
        <div className="initial">
          <div className="Question">
          What would you like to know? 
          </div>

          <form>
            <div className="inputquestion">
              <input type="text" className ='input' placeholder='Enter your question here...'/>
              <div className="button">
                <button className="btn btn-primary" onClick={props.onClick}>Submit</button>
              </div>
            </div>
          </form>
          
        </div>
    )
}
 
export default Initial;