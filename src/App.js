import React from 'react';
import './App.css';
import AddDelete from './components/AddDelete';
import Store from './components/Store';



function App() {
  const { list, input, setInput, addTodo, deleteTodo} = Store();
    
  return(
    <div>
      <h2>Todo List</h2>
      <AddDelete
      list = {list}
      input = {input}
      setInput={setInput}
      addTodo = {addTodo}
      deleteTodo = {deleteTodo}
      />
    </div>
      );
}

export default App;
