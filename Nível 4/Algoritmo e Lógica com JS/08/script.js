
/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Luiz",
        age: 27,
        weight: 70,
        height: 190,
    },
    {
        name: "John",
        age: 30,
        weight: 85,
        height: 185,
    },
    {
        name: "Leia",
        age: 26,
        weight: 67,
        height: 169,
    }
]

function IMC(weight, height){
    return ((weight / ((height / 100) ** 2))).toFixed(2)
}

function printMessage(patient){
    return `
    O paciente ${patient.name} tem IMC de ${IMC(patient.weight, patient.height)}
    `
}

for(let patient of patients){
    let message = printMessage(patient)
    alert(message)
}