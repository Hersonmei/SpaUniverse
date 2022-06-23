const btnPanel = document.querySelectorAll('.btn')
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnVolumeUp = document.querySelector('.volumeUp')
const btnVolumeDown = document.querySelector('.volumeDown')
const minutes = document.querySelector(".minutes").textContent

console.log(minutes);

btnPanel.forEach(btn => btn.addEventListener('click', function(){
    removeClassActive()
    btn.classList.toggle("active")
}))

function removeClassActive(){
    btnPanel.forEach(btn => 
        btn.classList.remove('active')
    )
}