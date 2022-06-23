import { Events } from "./events.js"
import { Sounds } from "./sounds.js"

const btnPanel = document.querySelectorAll('.btn')
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnVolumeUp = document.querySelector('.volumeUp')
const btnVolumeDown = document.querySelector('.volumeDown')
const minutes = document.querySelector(".minutes").textContent

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCafeteria = document.querySelector('.cafeteria')
const btnFireplace = document.querySelector('.fireplace')

const sounds = Sounds()

Events({
    btnCafeteria,
    btnFireplace,
    btnForest,
    btnRain,
    btnPanel
})

function removeClassActive(){
    btnPanel.forEach(btn => 
        btn.classList.remove('active')
    )
}






