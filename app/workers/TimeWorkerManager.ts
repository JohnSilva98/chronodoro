let instance: timeWorkerManager | null = null

export class timeWorkerManager {
 private worker:Worker   

 private constructor(){
    this.worker = new Worker(new URL('./TimerWorker.js', import.meta.url))
    
    
 }
 
 static getInstance(){
    if(!instance){
        instance = new timeWorkerManager()
    }
    return instance
 }

 postMessage(message: any){
    this.worker.postMessage(message)
 }

 onmessage(callback: (e: MessageEvent) => void){
    this.worker.onmessage = callback
 }

 terminate(){
    this.worker.terminate()
    instance = null
 }
}