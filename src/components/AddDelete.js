import React from 'react'

const AddDelete = ({list,input,setInput, addTodo,deleteTodo}) => {

  return (
    <div>
    <input 
    type='text'
    value = {input}
    onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={() => addTodo(input)}>Add task</button>

    <ul> 
        {list.map((todo) =>(
            <li key = {todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                </li>

        )) }
    </ul>
    </div>
  );
};

export default AddDelete;