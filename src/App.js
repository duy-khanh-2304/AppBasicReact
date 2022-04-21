import "./App.css";
import { useStore } from "./store2";
import * as actions from './store2';
import {useRef} from 'react';

function App() {
  const context = useStore();
  const [state, dispatch] = context;
  let inputRef = useRef();

  //Add
  const handleAdd = ()=>{
    if(state.todoInput !== ''){
      dispatch(actions.addTodo(state.todoInput));
      dispatch(actions.setTodoInput(''));
      inputRef.current.focus();
    }else{
      inputRef.current.focus();
    }
  }

  //Delete
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  }

  //Change
  const handleChange = (index) =>{
    dispatch()
  }

  return (
    <div style={{padding:'20px'}}>
      <input 
        ref={inputRef}
        type="text" 
        value={state.todoInput}
        placeholder="Enter a new todo"
        onChange={(event)=>{
          dispatch(actions.setTodoInput(event.target.value));
        }}  
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.todos.map((todo,index)=>{
          return(
            <li key={index}>
              {todo}
              <span 
                style={{paddingLeft:'20px'}}
                onClick={()=> handleDelete(index)}
              >&times;</span>
              <span 
                style={{paddingLeft:'20px'}}
                onClick={()=>handleChange(index)}
              >
                <button onClick>Change</button>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default App;
