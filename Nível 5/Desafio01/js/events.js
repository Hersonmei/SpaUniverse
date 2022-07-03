
import {
    btnForest,
    btnRain,
    btnCafeteria,
    btnFireplace,
    volumeForest,
    volumeRain,
    volumeFire,
    volumeCafeteria,
    whiteMode,
    darkMode,
    btnPanel,
    btnPlay,
    btnPause,
    btnTimeUp,
    btnTimeDown,
    timer
} from  "./elements.js"


export function Events({
    sounds,
    theme
}){
    
    btnPanel.forEach(btn => btn.addEventListener('click', () => {
        theme.removeClassActive()
        sounds.cancelAudio()
        btn.classList.toggle("active")
    }))

    btnForest.addEventListener('click', () => {   
       sounds.audioForest.play()
    })

    volumeForest.addEventListener('change', () => {
        sounds.audioForest.volume = volumeForest.value
    })

    btnRain.addEventListener('click', () => {
        sounds.audioRain.play()
    })

    volumeRain.addEventListener('change', () => {
        sounds.audioRain.volume = volumeRain.value
    })

    btnCafeteria.addEventListener('click', () => {
        sounds.audioCafeteria.play()
    })

    volumeCafeteria.addEventListener('change', () => {
        sounds.audioCafeteria.volume = volumeCafeteria.value
    })

    btnFireplace.addEventListener('click', () => {
        sounds.audioFireplace.play()
    })

    volumeFire.addEventListener('change', () => {
        sounds.audioFireplace.volume = volumeFire.value
    })

    //Events Dark Mode

    whiteMode.addEventListener('click', () => {
        theme.whiteTheme()
    })
    
    darkMode.addEventListener('click', () => {
        theme.darkTheme()
    })



    
    // Events Buttons Play, Pause, TimeUp, TimeDown
    let minutes = Number(document.querySelector(".minutes").textContent)
    let seconds = Number(document.querySelector('.seconds').textContent)       

    let timeInterval = 0

    btnPlay.addEventListener("click", () => {

        if(!(timer.classList.contains('playActive'))){
            timeInterval = setInterval(minutesSeconds, 1000)
            theme.addClassPlay()
        }
        
        function minutesSeconds(){
            if((seconds == 0 && minutes == 0)){
                clearInterval(timeInterval)
                return
            }
            
            if(seconds == 0){
                minutes = --minutes
                document.querySelector('.minutes').textContent = String(minutes).padStart(2, 0)
                seconds = 60
            } 
    
            if (seconds != 0){
                seconds = --seconds
                document.querySelector('.seconds').textContent = String(seconds).padStart(2, 0)   
            }
        }
    })

    btnPause.addEventListener("click", () =>{
        clearInterval(timeInterval)
        timer.classList.remove('playActive')
    })
    
    btnTimeUp.addEventListener("click", () => {
        minutes = minutes + 5
        document.querySelector('.minutes').textContent = String(minutes).padStart(2, 0)
    })
    
    btnTimeDown.addEventListener("click", () => {
        if(minutes >= 5){
            minutes = minutes - 5
            document.querySelector('.minutes').textContent = String(minutes).padStart(2, 0)
        }
    })
}


