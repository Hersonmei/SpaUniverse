/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

/*
Achei muito legal essa lógica aplicada aqui, enquanto o option diferente de 3 eu vou ficar aplicando meu prompt. Só que meu prompt precisa ficar repetindo lá dentro, então, eu declaro option fora do while e sem valor. Logo ele vai entrar normalmente dentro do while pq o valor dele vai ser diferente de 3.

Meu array tbm precisa ficar fora do while para poder receber os valores adicionados e não perder a cada rodada do while. 
*/

let option;

let myArray = []

while(option != 3){
    option = prompt(`
    Olá usuário! Digite o número da opção desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa
    `)


    if(option == 1){
        myArray.push(prompt('Digite o item'))
    } else if(option == 2){
        if(myArray.length == 0){
            alert("Não existem itens cadastrados")
        } else{
            alert(myArray)
        }
    } 

}
