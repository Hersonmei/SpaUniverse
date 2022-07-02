import { Sounds } from "./sounds.js"

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCafeteria = document.querySelector('.cafeteria')
const btnFireplace = document.querySelector('.fireplace')

let volumeForest = document.querySelector('.volume-control.forest')
let volumeRain = document.querySelector('.volume-control.rain')
let volumeCafeteria = document.querySelector('.volume-control.cafeteria')
let volumeFire = document.querySelector('.volume-control.fire')

console.log(volumeForest);
const sounds = Sounds()

export function Events({
    btnPanel,
    removeClassActive
}){
    
    btnPanel.forEach(btn => btn.addEventListener('click', () => {
        removeClassActive()
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
}


