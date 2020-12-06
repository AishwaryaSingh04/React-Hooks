export default function reducer(state,action){
    switch(action.type){
        case 'Toggle_Todo':{
                const newTodos = state.todos.map(item=>{
                    if(item.id===action.payload.id){
                        item.complete=!item.complete;
                    }
                    return item;
                })
                return{
                    ...state,
                    newTodos

                }
        }
        case 'Remove':{
            const newTodos = state.todos.filter(item=>{
               return item.id!==action.payload.id;   
            })
            console.log(newTodos)
            return{
                ...state,
                todos:newTodos
            }
        }

        case 'ADD_TODO':{
            const addTodoItem = {
                id : new Date(),
                text: action.payload,
                complete: true
            }
            const newTodos = [...state.todos,addTodoItem];
            return{
                ...state,
                todos:newTodos
            }
        }
        case 'modify':{
            const updateTodo = state.todos.map(item=>{
                if(item.id===action.payload.id){
                    item.text=action.payload;
                }
                return item;
            })
            return{
                ...state,
                todos:updateTodo
            }
        }

        default: return state; 
    }
}