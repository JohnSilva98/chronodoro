import { TaskContext } from "./TaskContext";
import { useEffect, useReducer, useRef } from "react";
import { initialState } from "./initialState";
import { taskReducer } from "./TaskReducer";
import { timeWorkerManager } from "@/app/workers/TimeWorkerManager";
import { TaskActionsTypes } from "./TaskActions";
import { loadBeep } from "@/app/utils/LoadBeep";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
     const [state, dispatch] = useReducer(taskReducer, initialState);
     const worker = timeWorkerManager.getInstance()
     let playbeepRef = useRef<()=>void | null>(null)


     worker.onmessage((e) => {
        const countdownSeconds = e.data
        if(countdownSeconds <= 0){
            if(playbeepRef.current){
                playbeepRef.current()
                playbeepRef.current = null
            }
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
       if(!state.activeTask){
        worker.terminate()
       } 
       worker.postMessage(state)
     }, [worker, state])

     useEffect(()=>{
        if(state.activeTask && playbeepRef.current === null){
            playbeepRef.current = loadBeep()
        }
     }, [state.activeTask])



    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}