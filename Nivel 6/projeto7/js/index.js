import {Router} from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")


router.handle() // Esse aqui vai ser para executar logo no começo, se não tivesse, ia aparecer o texto só quando fosse clicado no botão e ativado o evento.

window.onpopstate = () => router.handle() // Aqui vai permitir que quando volte a página ela mude o conteúdo.
window.route = () => router.route() // Aqui quando add no módule, não estava funcionado a parte do route(), com isso add ela aqui no window. Poderia colcoar lá no onclick tbm, ficaria windown.route()

console.log(Router.prototype);