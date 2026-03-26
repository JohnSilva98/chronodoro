let isRunning = false


self.onmessage = function(e) {
if(isRunning) return;
isRunning = true;

const state = e.data
const {activeTask, secondsRemaining} = state //recupera task do estado, e tambem os segundos restantes para finalizar a task

const endDate = activeTask.startDate + secondsRemaining * 1000 //calcula data de termino da task

const now = Date.now()
let countdownSeconds = Math.ceil((endDate - now) / 1000)

function tick(){
    self.postMessage(countdownSeconds)
    countdownSeconds = Math.ceil((endDate - Date.now()) / 1000)
    setTimeout(tick, 1000)
}

tick()
}   
