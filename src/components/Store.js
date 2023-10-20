import React,{useState} from 'react'

const Store = () => {
    const[list,setList] = useState([]);
    const[input,setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id : Math.random(),
            todo : todo,
        };
    setList([...list,newTodo]);
    setInput("");
    };

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);       
    }
  return (
    { list, input, setInput, addTodo, deleteTodo}
  );
  
}
export default Store;