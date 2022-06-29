import { Events } from "./events.js"

const whiteMode = document.querySelector('.btn-white')
const darkMode = document.querySelector('.btn-dark')

const body = document.querySelector('body')
const svg = document.querySelectorAll('svg')
const btnPanel = document.querySelectorAll('.btn')

const timer = document.querySelector('.timer')
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnTimeUp = document.querySelector('.volumeUp')
const btnTimeDown = document.querySelector('.volumeDown')
let minutes = Number(document.querySelector(".minutes").textContent)
let seconds = Number(document.querySelector('.seconds').textContent)



Events({
    btnPanel,
    removeClassActive
})

function removeClassActive(){
    btnPanel.forEach(btn => 
        btn.classList.remove('active')
    )
}

function addClassPlay(){
    timer.classList.add('playActive')
}

let timeInterval = 0

btnPlay.addEventListener("click", () => {

    if(!(timer.classList.contains('playActive'))){
        timeInterval = setInterval(minutesSeconds, 1000)
        addClassPlay()
    }
    
    function minutesSeconds(){
        if((seconds == 0 && minutes == 0)){
            clearInterval(timeInterval)
            return
        }
        
        if(seconds == 0){
            minutes = --minutes
            document.querySelector('.minutes').textContent = String(minutes).padStart(2, 0)
            seconds = 3
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

whiteMode.addEventListener('click', () => {
    body.classList.add('dark')
    darkMode.classList.add('dark')
    whiteMode.classList.add('dark')
    svg.forEach(item => item.classList.add('dark'))
    btnPanel.forEach(item => item.classList.add('dark'))
})

darkMode.addEventListener('click', () => {
    body.classList.remove('dark')
    darkMode.classList.remove('dark')
    whiteMode.classList.remove('dark')
    svg.forEach(item => item.classList.remove('dark'))
    btnPanel.forEach(item => item.classList.remove('dark'))
})


