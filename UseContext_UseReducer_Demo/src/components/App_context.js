import logo from './logo.svg';
import './App.css';
import { useContext, useReducer } from 'react';
import { UserContext } from '..';

const initialState = {
  count:0
}
function reducer(state,action){
  switch(action.type){
    case 'increment': return{ count : state.count+1};
    case 'decrement': return{count :state.count-1};
    case 'reset': return initialState;
    default: return initialState;
  }
}

function App_Context() {

  /**
   * UseContext is the provided by the hooks to use the context(UserContext) that 
   * we created.
   */
  const value = useContext(UserContext)

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      Hello, {value}
        <p>Count : {state.count}</p>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  );
}

export default App_Context;
