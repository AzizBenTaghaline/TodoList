
import React from 'react';

function ToDo(props) {
  const DoneStyling={
      textDecoration: "line-through",
      fontStyle:"italic",
      color: "rgb(125, 165, 166)"
     }
  return <div className="item">
    <input type='checkbox' onChange={()=>props.handleChange(props.item.id)} checked={props.item.completed}/><span style={props.item.completed ? DoneStyling:null}>{props.item.text}</span><br/>
    </div>;
}

export default ToDo;
