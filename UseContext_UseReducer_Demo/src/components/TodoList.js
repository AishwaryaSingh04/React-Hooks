import { useContext ,useState } from "react";
import TodosContext from "../context";
import TodoItems from "./TodoItems";
import "./TodoList.css";

function TodoList(){

    const {state , dispatch} = useContext(TodosContext);

    return(
       <ul>
            {state.todos.map(item=>(
                <TodoItems listItem={item}/>    
            ))}
        </ul>
    )
    }

export default TodoList;