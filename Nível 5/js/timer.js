export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls
}){

  function updateDisplay (minutes, seconds){
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds = secondsDisplay.textContent
      let minutes = minutesDisplay.textContent

      updateDisplay(minutes, 0)

      if(minutes <= 0){
          resetControls()
          return
      }

      if(seconds <= 0){
          seconds = 10
          --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  return {
    countdown,
    reset.
    updateDisplay
  }
}