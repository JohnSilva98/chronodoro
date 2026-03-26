import { TaskStateModel } from "@/app/models/TaskStateModel";

export const initialState: TaskStateModel = {
    tasks:[],
    secondsRemaining: 0,
    formattedSeconds: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 1,
      shortBreak: 1,
      longBreak: 1
    }
  }