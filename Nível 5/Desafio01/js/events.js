import { Sounds } from "./sounds.js"

const sounds = Sounds()

export function Events({
    btnCafeteria,
    btnFireplace,
    btnForest,
    btnRain,
    btnPanel
}){
    
    btnPanel.forEach(btn => btn.addEventListener('click', () => {
        removeClassActive()
        sounds.cancelAudio()
        btn.classList.toggle("active")
    }))

    btnForest.addEventListener('click', () => {   
       sounds.audioForest.play()
    })

    btnRain.addEventListener('click', () => {
        sounds.audioRain.play()
    })

    btnCafeteria.addEventListener('click', () => {
        sounds.audioCafeteria.play()
    })

    btnFireplace.addEventListener('click', () => {
        sounds.audioFireplace.play()
})
}

