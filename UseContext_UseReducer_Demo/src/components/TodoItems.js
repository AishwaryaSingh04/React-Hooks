import { useContext ,useState } from "react";
import TodosContext from "../context";
import "./TodoForm.css";


function TodoItems(props){
   
    const {state , dispatch} = useContext(TodosContext);

    const [isEdit,setIsEdit] = useState(false);
    const [newValue,setNewValue] = useState(props.listItem.text);

    function modifyClicked(){
        setIsEdit(true);
    }
    function modifyValue(item){
        item.text=newValue;
       dispatch({type:'modify',payload:newValue});
       setIsEdit(false);
    }
    function discard(){
        setIsEdit(false);
    }

    function displayView(item){
        return(
            <li key={item.id} className={!item.complete?"disable-item list-item":"list-item"}>
                <span className="display-text" onDoubleClick={()=>dispatch({type:"Toggle_Todo",payload:item})}>{item.text}</span>
                <button className="custom-button" disabled={!item.complete}  onClick={()=>modifyClicked(item)}>Modify</button>
                <button className="custom-button" disabled={!item.complete} onClick={()=>dispatch({type:'Remove',payload:item})}>Remove</button>
            </li>
        )
    }

    
    function editedView(item){
        return(
            <form className="edit-form">
                <input id="edited-input" value={newValue} onChange={(event)=>setNewValue(event.target.value)}/>
                <button className="custom-button" onClick={()=>modifyValue(item)}>Save</button>
                <button className="custom-button" onClick={()=>discard(item)}>Cancel</button>
            </form>
        )
    }

    return(
        <>
        {isEdit? editedView(props.listItem):displayView(props.listItem)}
        </>
    )

}

export default TodoItems;