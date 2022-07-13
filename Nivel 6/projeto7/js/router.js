export class Router{
    
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    

    route(event){
        event = event || window.event //Ele está verificando se aqui se está passando   
        event.preventDefault()      //um evento. Se não, vai pegar o event do window(objeto globalzão(principal)).
        
        window.history.pushState({}, "", event.target.href)     

        this.handle()
    }

    handle(){
        const { pathname }  = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
        document.querySelector('#app').innerHTML = html
        })
  }

        
}