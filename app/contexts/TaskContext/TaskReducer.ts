import { TaskStateModel } from "@/app/models/TaskStateModel";
import {  TaskActionsTypes } from "./TaskActions";
import { getNextCycle } from "@/app/utils/GetNextCycle";
import { formatSecondsToMinutes } from "@/app/utils/FormattSecondsToMinutes";
import { initialState } from "./initialState";

export function taskReducer(
    state: TaskStateModel,
    action: TaskActionModel,
): TaskStateModel {
    switch(action.type){
        case TaskActionsTypes.START_TASK:{
            const newTask = action.payload!;
            const nextCycle = getNextCycle(state.currentCycle)
            const secondsRemaining = newTask.duration * 60;
            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSeconds: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask],
            }
        }
        case TaskActionsTypes.INTERRUPT_TASK:{
            return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSeconds: '00:00',
        tasks: state.tasks.map(task => {
            if(state.activeTask?.id === task.id) {
                return {
                    ...task,
                    interruptDate: Date.now()
                }
            }
            return task
        })
    };
}
      case TaskActionsTypes.COMPLETE_TASK:{
            return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSeconds: '00:00',
        tasks: state.tasks.map(task => {
            if(state.activeTask?.id === task.id) {
                return {
                    ...task,
                    CompleteDate: Date.now()
                }
            }
            return task
        })
    };
}
case TaskActionsTypes.RESET_STATE:{
    return {...initialState};
}
case TaskActionsTypes.COUNT_DOWN:{
    return{
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSeconds: formatSecondsToMinutes(action.payload.secondsRemaining)

    }
}
case TaskActionsTypes.UPDATE_SETTINGS:{
    return{
        ...state,
        config: {
            ...state.config,
            workTime: action.payload.workTime,
            shortBreak: action.payload.shortBreak,
            longBreak: action.payload.longBreak
        }
    }
}
}
}

