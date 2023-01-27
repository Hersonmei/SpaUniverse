export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
        //Aqui está acessando a propriedade e valor do routes, como o símbolo e o link da página.
    }


    //Esse route() vai ser a função(método) que vai ser ativado lá naquele onclick() do html. É como se fosse adicionando um addEventListener no meu <a> quando for clicado, ai a função que será ativada será esse route. E vou passar o event como argumento dessa função.
    route(event){
        event = event || window.event //Ele está verificando se aqui se está passando um evento. Se não, vai pegar o event do window(objeto globalzão(principal)).  
        event.preventDefault() 
        
        window.history.pushState({}, "", event.target.href) //Aqui vai atualizar o histórico do window com o href da tag que disparou o evento. Caso não faça isso, quando clicar na tag, dispara o route() que dispara o handle() mas a minha pathname vai ficar sempre sendo "/", pois não está atualizando.   

        this.handle() //Aqui eu não consigo chamar o handle(), preciso do .this para acessar essa instância do objeto. 
    }

    handle(){
        const { pathname, href, host, port }  = window.location //Aqui eu pego dentre todas as propriedades dentro do location, a que tem o mesmo nome do que eu coloquei entre {}, no caso pathname. Eu pego essa propriedade e coloco em uma constante. O nome disse é desestruturar. Só faz um cópia do pathname do location para a minha constante.

        const route = this.routes[pathname] || this.routes[404] //Isso aqui vai no objeto routes e pega a propriedade passada que é uma string, por isso vai entre chave. Como fosse routes."/about". A string vem do pathname.
       
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
    
}




