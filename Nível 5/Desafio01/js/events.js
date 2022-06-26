import { Sounds } from "./sounds.js"

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCafeteria = document.querySelector('.cafeteria')
const btnFireplace = document.querySelector('.fireplace')

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

