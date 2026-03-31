import { TaskModel } from "../models/TaskModel";

export function GetTaskStatus(task: TaskModel, activeTask: TaskModel | null){
    // basicamente esse código verifica o status da tarefa
    // se a tarefa foi completada, retorna 'Completa'
    // se a tarefa foi interrompida, retorna 'Interrompida'
    // se a tarefa está ativa, retorna 'Em progresso'
    // se a tarefa não foi completada, interrompida ou está ativa, retorna 'Abandonada'
  if(task.CompleteDate)return 'Completa'
  if(task.interruptDate)return 'Interrompida'
  if(task.id === activeTask?.id)return 'Em progresso'
  return 'Abandonada'
}