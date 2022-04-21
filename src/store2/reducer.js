import {SET_TODO_INPUT, ADD_TODO, DELETE_TODO} from './Constants';

const initState = {
    todoInput:'',
    todos:[]
}

const reducer = (state, action) => {
    console.log(action.type);
    console.log('Prev state');
    console.log(state);
    let newState = {};
    switch(action.type){
        case SET_TODO_INPUT:
            newState = {
                ...state,
                todoInput:action.payload
            }
            break;
        case ADD_TODO:
            newState = {
                ...state,
                todos:[...state.todos,action.payload]
            }
            break;
        case DELETE_TODO:
            let newTodos = [...state.todos];
            newTodos.splice(action.payload,1);
            newState = {
                ...state,
                todos:newTodos
            }
            break;
        default:
            throw new Error("Invalid action");
    }
    console.log('New State');
    console.log(newState);
    console.log("-------------------------------------");
    return newState;
}

export {initState}
export default reducer