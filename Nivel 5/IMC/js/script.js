import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weigth')
const inputHeight = document.querySelector('#heigth')

inputWeight.addEventListener('input', () => AlertError.close())

inputHeight.addEventListener('input', () => AlertError.close())

form.onsubmit = e => {
    e.preventDefault()

    const weigth = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weigth) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weigth, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}