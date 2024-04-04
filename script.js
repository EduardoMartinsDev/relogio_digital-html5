const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

function newtime(){
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hoursElement.textContent = fixtime(hours)
    minutesElement.textContent = fixtime(minutes)
    secondsElement.textContent = fixtime(seconds)
}

function fixtime(time){
    return time <10 ? '0' +time : time
}

newtime()
setInterval(newtime,1000)
