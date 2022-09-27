const btn = document.querySelector("#myBtn")
const btn2 = document.querySelector("#myBtn2")
const imputNumber = document.querySelector("#palpite")
const tagH1 = document.querySelector("h1")
const paragraph = document.querySelector('p')
const inputs = document.querySelector('.inputs')
let number = randomNumber()
let value
let countTry = 0

console.log(imputNumber.style);

btn.addEventListener("click", function(e){
    e.preventDefault();
    value = imputNumber.value
    
    
    countTry++

    if (value == number){
        tagH1.textContent = `Acertou em ${countTry} tentativa(s)!`
        paragraph.style.display = "none"
        inputs.style.display = "none"
        btn2.style.display = "block"
    } 

    imputNumber.value = ""
})

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    
    reset()
})

function reset(){
    countTry = 0
    number = randomNumber()
    tagH1.textContent = "Jogo de Adivinhação"
    paragraph.style.display = "block"
    inputs.style.display = "block"
    btn2.style.display = "none"
    
}

function randomNumber(){
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
}