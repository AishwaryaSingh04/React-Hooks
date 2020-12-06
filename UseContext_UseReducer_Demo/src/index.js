import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContext from './context';
import './index.css';
import reducer from './reducer';
import reportWebVitals from './reportWebVitals';

function App(){
  
  const initialState = useContext(TodosContext);

  const [state,dispatch] = useReducer(reducer,initialState);

  return(
    /**
     * Passing state and dispatch so that can be accessed anywhere inside
     */
    <TodosContext.Provider value={{state,dispatch}}>
      <div className="container"> 
        <TodoForm/>
        <TodoList/>
      </div>
    </TodosContext.Provider>
  )
}

ReactDOM.render(
      <App />
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
