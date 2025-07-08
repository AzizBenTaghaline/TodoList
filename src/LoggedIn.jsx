import React from "react";


function LogIn(props){
    return(
    <div>
        <h2>This user is</h2>
        <p>{props.isLoggedIn ? "Logged In" : "Not Logged In"}</p>
        <button onClick={()=>props.handleClick()}>Login</button>
    </div>);
    
}
export default LogIn;