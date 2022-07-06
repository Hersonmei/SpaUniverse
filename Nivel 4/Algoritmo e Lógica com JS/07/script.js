/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

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

let patientsNames = []

for(let patient of patients){
    patientsNames.push(`
    ${patient.name} tem ${patient.age}, pesa ${patient.weight} kilos e altura de ${patient.height} `)
}

alert(patientsNames)