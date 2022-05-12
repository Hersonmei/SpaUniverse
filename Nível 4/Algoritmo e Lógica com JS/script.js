let nome = prompt("Digite o nome do aluno: ")
let not1 = prompt("Primeira nota: ")
let not2 = prompt("Segunda nota: ")
let not3 = prompt("Terceira nota: ")

let average = ((Number(not1) + Number(not2) + Number(not3)) / 3)

average = average.toFixed(2)

if(average < 7){
    alert(`Você reprovou! Torcemos que se saia melhor na próxima. Nota final ${average}`)
} else(
    alert(`Parabéns ${nome}! Você foi aprovado com nota final ${average}!`)
)