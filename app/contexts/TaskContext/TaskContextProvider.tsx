import { TaskContext } from "./TaskContext";
import { useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import { taskReducer } from "./TaskReducer";
import { timeWorkerManager } from "@/app/workers/TimeWorkerManager";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
     const [state, dispatch] = useReducer(taskReducer, initialState);
     const worker = timeWorkerManager.getInstance()

     worker.onmessage((e) => {
       console.log(e);
     })
   

     useEffect(()=>{
       if(!state.activeTask){
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