import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import ToDo from './ToDo'
import LogIn from './LoggedIn'
import Joke from "./Joke"
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
/*
constructor(){
  super()
  this.state={
    isLoggedIn:true
  }
this.handleClick=this.handleClick.bind(this)}

handleClick(){
    this.setState(prevState=>{
      return{
      isLoggedIn:!prevState.isLoggedIn}}
    )
  }
  render(){
    return(

    <LogIn handleClick={this.handleClick} isLoggedIn={this.state.isLoggedIn}/>
    )
  }}*/
/*
 function App() {
  return (
  <div className="list">
    <Joke 
    joke={{question:"Why don’t skeletons fight each other?",punchline:"Because they don’t have the guts."}}/>
    <Joke
    joke={{question:"Why don’t skeletons fight each other?",punchline:"Because they don’t have the guts."}} />
    <Joke
    joke={{question:"Why don’t skeletons fight each other?",punchline:"Because they don’t have the guts."}} />
  </div>
  )
}

export default App*/