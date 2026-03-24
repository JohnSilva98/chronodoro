
import { createContext } from "react";
import { TaskStateModel } from "@/app/models/TaskStateModel";
import { initialState } from "./initialState";

  type TaskContextProps ={
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
  }


const initialConextValue = {
    state: initialState,
    setState: () => {}
}

export const  TaskContext = createContext<TaskContextProps>(initialConextValue)

