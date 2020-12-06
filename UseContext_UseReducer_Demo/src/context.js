
import React from 'react';

const TodosContext = React.createContext({
    todos:[
        {id:1, text:'Breakfast',complete:false,isEdit:false},
        {id:2, text:'Lunch',complete:true,isEdit:false},
        {id:3, text:'Dinner',complete:true,isEdit:false}
    ]
});

export default TodosContext;