import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'
import ToDo from './ToDo'
import Joke from "./Joke"
import todosData from './todosData'
/*
interface TodoItem {
  id:number;
  text: string;
  completed: boolean;
}

interface AppState {
  todos: TodoItem[];
}
*/
class App extends React.Component{
  constructor(){
    super();
    this.state={
    todos:todosData
    };
  };
  
  render(){
     const todoComponents=this.state.todos.map(item => <ToDo key={item.id} item={item}/>)
     return (
  <div className="list"> 
   {todoComponents}
  </div> )
}
}

/*class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: todosData
    };
  }

  render() {
    const todoComponents = this.state.todos.map((item) => (
      <ToDo key={item.id} item={item} />
    ));

    return <div className="list">{todoComponents}</div>;
  }
}*/

export default App;
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