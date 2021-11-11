import React from 'react';


function Question () {
    return (
    <div>
        <div className="Question">
        What would you like to know? 
        </div>
        <div className="inputquestion">
            <input type="text" className ='input'placeholder='Enter your question here...'/>
            <div className="button">
            <button className="btn btn-primary" onClick>Submit</button>
            </div>
    
        </div>
    </div>
    );
}

export default Question;