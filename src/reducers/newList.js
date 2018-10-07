import {ADD_TODO, TOGGLE_TODO} from "../actions/types";


const todos = (state = [], action) =>{
   switch (action.type) {
       case ADD_TODO:
           return [...state,
               {
                id: action.id,
                text: action.text,
                completed: true
               }
           ];
       case TOGGLE_TODO:
           if (state.id !== action.id) {
               return state
           }

       default:
           return state;
   }
} ;

export default todos;
