import { TaskModel } from "../../models/TaskModel";

export enum TaskActionsTypes {
    START_TASK = "START TASK",
    INTERRUPT_TASK = "INTERRUPT TASK",
    RESET_STATE = "RESET STATE",
    COUNT_DOWN = "COUNT DOWN",
    COMPLETE_TASK = 'COMPLETE TASK',
    UPDATE_SETTINGS = 'UPDATE SETTINGS'
}

export type TaskActionWithPayloiad = {
    type: TaskActionsTypes.START_TASK;
    payload?: TaskModel;
} | {
    type:TaskActionsTypes.COUNT_DOWN
    payload:{secondsRemaining:number}
} |{
    type: TaskActionsTypes.UPDATE_SETTINGS
    payload:{workTime:number, shortBreak:number, longBreak:number}
}

export type TaskActionWithoutPayloiad = {
    type: TaskActionsTypes.INTERRUPT_TASK;
    
} | {
    type: TaskActionsTypes.RESET_STATE;
    
} | {
    type: TaskActionsTypes.COMPLETE_TASK;
}

export type TaskActionModel = TaskActionWithPayloiad | TaskActionWithoutPayloiad
