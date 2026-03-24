import { TaskContext } from "./TaskContext";
import { useEffect, useState } from "react";
import { initialState } from "./initialState";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
     const [state, setState] = useState(initialState);

     useEffect(()=>{
       console.log(state); 
     }, [state])
    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    )
}