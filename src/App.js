import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
//}
function App(){

  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  
  function getInputTodo(event){
    setInputTodo(event.target.value)
  }

  function addTodo(event){
    event.preventDefault()
    setInputTodo('')
    setTodos([...todos,inputTodo])
  }
function deleteItem(todoR){
  // let newTodos = []
  // todos.map((params) => {
  //   if (params !== todoR){
  //     newTodos.push( params )
  //   }

  // })
  // console.log(newTodos.reverse())
  //setTodos(newTodos.reverse()) 

  setTodos( oldTodos => todos.filter(item => item !== todoR  ) ) 

}

  return <div>
    <h1>What nedds to be done ?</h1>
    <form onSubmit={addTodo}>
      <input type="text" value={inputTodo} onChange={getInputTodo} /> 
      <button type="submit">Add Todo</button>
    </form>

    <ul>
        {todos.map((todo) => {
          return <div>
                      <li name={todo}> {todo} </li> <button onClick={()=>deleteItem(todo)}>Delete</button>
                </div>
        })}
    </ul>
  </div>
}

export default App;
