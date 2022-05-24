const students = [
    {
        nome: "José",
        nota1: 5,
        nota2: 7
    },
    {
        nome: "Ivson",
        nota1: 10,
        nota2: 8
    },
    {
        nome: "Renan",
        nota1: 10,
        nota2: 9
    }
    ]
    
       
    function notasMedia(nota1, nota2){
      return (nota1 + nota2) / 2
    }
    
    function message(media, name){
      if(media >= 7){
        return `Parabéns ${name}, você foi aprovado o concurso!`
      } 
      return `Infelizmente ${name}, você não passou!`
    }

    
    
    for(aluno of students){
    let media = notasMedia(aluno.nota1, aluno.nota2)
    
    alert(`A média do(a) aluno(a) ${aluno.nome} é: ${media}.\n${message(media, aluno.nome)}`)
    }
    