
import { createContext } from "react";
import { TaskStateModel } from "@/app/models/TaskStateModel";
import { initialState } from "./initialState";
import { TaskActionModel } from "./TaskActions";

  type TaskContextProps ={
    state: TaskStateModel
    dispatch: React.Dispatch<TaskActionModel>
  }


const initialConextValue = {
    state: initialState,
    dispatch: () => {}
}

export const  TaskContext = createContext<TaskContextProps>(initialConextValue)

