import { TaskContext } from "./TaskContext";
import { useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import { taskReducer } from "./TaskReducer";
import { timeWorkerManager } from "@/app/workers/TimeWorkerManager";
import { TaskActionsTypes } from "./TaskActions";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
     const [state, dispatch] = useReducer(taskReducer, initialState);
     const worker = timeWorkerManager.getInstance()

     worker.onmessage((e) => {
        const countdownSeconds = e.data
       console.log(countdownSeconds);
        if(countdownSeconds <= 0){
          dispatch({
                type:TaskActionsTypes.COMPLETE_TASK,
            })
            worker.terminate()
        }else{
            dispatch({
                type:TaskActionsTypes.COUNT_DOWN,
                payload:{secondsRemaining: countdownSeconds}
            })
        }
     })
   

     useEffect(()=>{
        console.log(state)
       if(!state.activeTask){
        console.log("No active task, terminating worker");
        worker.terminate()
       } 
       worker.postMessage(state)
     }, [worker, state])
    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}