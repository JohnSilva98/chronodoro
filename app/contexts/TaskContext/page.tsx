import { TaskStateModel } from "@/app/models/TaskStateModel";
import { createContext } from "react";


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

 export const TaskContext = createContext<TaskContextProps>({
    state: initialState,
    setState: () => {}
})