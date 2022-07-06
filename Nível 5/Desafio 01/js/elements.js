const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCafeteria = document.querySelector('.cafeteria')
const btnFireplace = document.querySelector('.fireplace')

let volumeForest = document.querySelector('.volume-control.forest')
let volumeRain = document.querySelector('.volume-control.rain')
let volumeCafeteria = document.querySelector('.volume-control.cafeteria')
let volumeFire = document.querySelector('.volume-control.fire')

const whiteMode = document.querySelector('.btn-white')
const darkMode = document.querySelector('.btn-dark')
const body = document.querySelector('body')
const svg = document.querySelectorAll('svg')
const btnPanel = document.querySelectorAll('.btn')

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnTimeUp = document.querySelector('.volumeUp')
const btnTimeDown = document.querySelector('.volumeDown')

const timerElements = document.querySelector('.timer')
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector('.seconds')

export {
    
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
    body,
    svg,
    btnPanel,
    btnPlay,
    btnPause,
    btnTimeUp,
    btnTimeDown,
    timerElements,
    minutesDisplay,
    secondsDisplay
}