import reactLogo from './assets/react.svg'
import React from 'react'
import ToDo from './ToDo'
import todosData from './todosData'

class App extends React.Component{
   constructor(){
    super();
    this.state={
    todos:todosData
    };
    this.handleChange=this.handleChange.bind(this);
  };
  
  handleChange(id){
    this.setState(prevState=>{
      const newList=prevState.todos.map(todo=>{
        if(todo.id===id)
          return { ...todo, completed: !todo.completed };
        return todo
      })
      return {
        todos:newList
      }
    })
  }

  render(){
     const todoComponents=this.state.todos.map(item => <ToDo key={item.id} item={item} handleChange={this.handleChange} />)
  return (
  <div className="list"> 
   {todoComponents}
  </div> )
}
}
export default App;