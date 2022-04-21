import { SET_JOB, ADD_JOB, DELETE_JOB } from "./Constant"
export const initState = {
    job:'',
    jobs:[]
};

const reducer = (state, action) =>{
    console.log('call reducer');
    console.log("Action : " + action.type);
    console.log("Prev state");
    console.log(state);
    let newState = {};
    switch(action.type){
        case SET_JOB: 
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs,action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload,1);
            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw new Error('Invalid action');
    }
    console.log("New State : ");
    console.log(newState);
    console.log("------------------------------------------------");
    return newState;
}

export default reducer;