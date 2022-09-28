const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector('.screen2')
let randNumber = randomNumber()
let countTry = 0

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
      handleResetClick()
    }
})

//Funções
function handleTryClick (event){
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber")

    countTry++

    if (inputNumber.value == randNumber){
        toggleSreen()

        screen2.querySelector('h2').innerText = `Acertou em ${countTry} tentativa(s)!`
    } 
}

function toggleSreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle("hide")
}

function handleResetClick (e) {
    toggleSreen()
    countTry = 0
    randNumber = randomNumber()
}

function randomNumber(){
    return Math.floor(Math.random() * (10 - 0 + 1) + 0)
}