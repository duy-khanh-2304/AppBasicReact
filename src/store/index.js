import {  useReducer, useRef } from "react";
import reducer, {initState} from "./reducer";
import {setJob, addJob, deleteJob} from './actions';

function Content() {
    const [state, dispatch] = useReducer(reducer,initState);
    const {job, jobs} = state;
    const jobRef = useRef();

    const handleAdd = () =>{
        if(job !== ''){
            dispatch(addJob(job));
            dispatch(setJob(''));
            jobRef.current.focus();
        }else{
            jobRef.current.focus();
        }
    }

    const handleDelete = (index) =>{
        dispatch(deleteJob(index));
    }
    return(
        <div>
            <h2>Todo basic</h2>
            <p>
                <input
                    ref={jobRef}
                    value={job} 
                    type="text" 
                    placeholder="Enter new job"
                    onChange={(e)=>{
                        dispatch(setJob(e.target.value));
                    }}
                />
            </p>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs !== [] && jobs.map((job,index)=>{
                    return  <li 
                                key={index}
                            >
                                {job}
                                <span 
                                    style={{paddingLeft:'10px'}}
                                    onClick={()=>{handleDelete(index)}}
                                >&times;</span>
                            </li>
                })}
            </ul>
        </div>
    );
}

export default Content;
