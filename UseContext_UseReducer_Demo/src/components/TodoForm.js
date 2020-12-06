import { useContext ,useState } from "react";
import TodosContext from "../context";
import "./TodoForm.css";



function TodoForm(){

    const [newItem,setNewItem] = useState("");
    const {dispatch} = useContext(TodosContext);

    function handleSubmit(event){
        event.preventDefault();
        dispatch({type:'ADD_TODO',payload:newItem});
        setNewItem('');
    };

    return(
        <form className="form-style" onSubmit={handleSubmit}>
            <input className="add-input" value={newItem} onChange={(event)=>setNewItem(event.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;