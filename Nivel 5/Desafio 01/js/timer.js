import {
    timerElements,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

 export default function Timer({
    theme
 }){
    
    let timeInterval = 0
    let minutes = Number(document.querySelector(".minutes").textContent)
    let seconds = Number(document.querySelector('.seconds').textContent)
    let isFinished = seconds == 0 && minutes == 0

    function updateDisplay(){
        minutesDisplay.textContent = String(minutes).padStart(2, 0)
        secondsDisplay.textContent = String(seconds).padStart(2, 0)
    }

    function play(){

        if(!(timerElements.classList.contains('playActive'))){
            timeInterval = setInterval(minutesSeconds, 1000)
            theme.addClassPlay()
        }
        
        function minutesSeconds(){
            if(isFinished){
                clearInterval(timeInterval)
                return
            }
            
            if(seconds == 0){
                minutes = --minutes
                updateDisplay(minutes)
                seconds = 60
            } 
    
            if (seconds != 0){
                seconds = --seconds
                updateDisplay(seconds)  
            }
        }
    }
   
    function pause(){
        clearInterval(timeInterval)
        timerElements.classList.remove('playActive')
    }
    
    function timeUp() {
        minutes = minutes + 5
        updateDisplay(minutes)
    }
    
    function timeDown() {
        if(minutes >= 5){
            minutes = minutes - 5
            updateDisplay(minutes)
        }
    }

    return{
        play,
        pause,
        timeUp,
        timeDown
    }
}
 
 
