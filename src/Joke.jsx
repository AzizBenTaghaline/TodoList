import React from "react";

function Joke(props)  {
    return( 
    <div className="joke-box">
        <p className="question"> {props.joke.question}</p>
        <p className="punchline"> {props.joke.punchline}😂</p>
    </div>
    )
}

export default Joke;