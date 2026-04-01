import { TaskStateModel } from "../models/TaskStateModel"

let instance: timeWorkerManager | null = null

export class timeWorkerManager {
 private worker:Worker | null = null

 private constructor(){
    //alerando o worker
 }
 
 static getInstance(){
    if(!instance){
        instance = new timeWorkerManager()
    }
    return instance
 }

 private ensureWorker(){
    if (!this.worker && typeof window !== 'undefined') {
        this.worker = new Worker(new URL('./TimerWorker.js', import.meta.url))
    }
 }

 postMessage(message: TaskStateModel){
    this.ensureWorker()
    if (this.worker) {
        this.worker.postMessage(message)
    }
 }


 onmessage(callback: (e: MessageEvent) => void){
    this.ensureWorker()
    if (this.worker) {
        this.worker.onmessage = callback
    }
 }

 terminate(){
    if (this.worker) {
        this.worker.terminate()
        this.worker = null
    }
    instance = null
 }
}