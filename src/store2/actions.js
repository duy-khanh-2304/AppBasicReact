import {SET_TODO_INPUT, ADD_TODO, DELETE_TODO} from './Constants';

const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

const deleteTodo = payload => {
    return {
        type:DELETE_TODO,
        payload
    }
}

export {setTodoInput, addTodo, deleteTodo}