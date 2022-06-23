const btnPanel = document.querySelectorAll('.btn')
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnVolumeUp = document.querySelector('.volumeUp')
const btnVolumeDown = document.querySelector('.volumeDown')
const minutes = document.querySelector(".minutes").textContent

const audioForest = new Audio("b")

const audioRain = new Audio()

const audioCafeteria = new Audio()

const audioFireplace = new Audio()

function removeClassActive(){
    btnPanel.forEach(btn => 
        btn.classList.remove('active')
    )
}

btnPanel.forEach(btn => btn.addEventListener('click', function(){
    removeClassActive()
    btn.classList.toggle("active")
    audioForest.play()

}))

