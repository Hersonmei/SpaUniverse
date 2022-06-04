function timer(){

  function updateTimerDisplay (minutes, seconds){
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds = secondsDisplay.textContent
      let minutes = minutesDisplay.textContent

      updateTimerDisplay(minutes, 0)

      if(minutes <= 0){
          resetControls()
          return
      }

      if(seconds <= 0){
          seconds = 10
          --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  return countdown

}