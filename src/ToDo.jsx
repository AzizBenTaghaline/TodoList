
import React from 'react';

function ToDo(props) {
  return <div className="item">
    <input type='checkbox' onChange={()=>props.handleChange(props.item.id)} checked={props.item.completed}/><span>{props.item.text}</span><br/>
    </div>;
}

export default ToDo;
