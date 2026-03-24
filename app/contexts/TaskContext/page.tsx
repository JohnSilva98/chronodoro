import { TaskStateModel } from "@/app/models/TaskStateModel";
import { createContext, useContext, useState } from "react";


  const initialState: TaskStateModel = {
    tasks:[],
    secondsRemaining: 0,
    formattedSeconds: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 25,
      shortBreak: 5,
      longBreak: 15
    }
  }

  type TaskContextProps ={
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
  }


const initialConextValue = {
    state: initialState,
    setState: () => {}
}

export const  TaskContext = createContext<TaskContextProps>(initialConextValue)

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
     const [state, setState] = useState(initialState);
    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTaskContext() {
    return useContext(TaskContext)
}