
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
} from  "./elements.js"


export function Events({
    sounds,
    theme,
    timer
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

    btnPlay.addEventListener("click", () => {
        timer.play()
    })

    btnPause.addEventListener("click", () =>{
        timer.pause()
    })
    
    btnTimeUp.addEventListener("click", () => {
        timer.timeUp()
    })
    
    btnTimeDown.addEventListener("click", () => {
        timer.timeDown()
    })
}


