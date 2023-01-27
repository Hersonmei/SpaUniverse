export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle(){
        const {pathname, href, host, port} = window.location

        const route = this.routes[pathname] //Aqui tirei o ou do 404, ver se pode aparecer algum problema.

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#page').innerHTML = html
        })

    }
}