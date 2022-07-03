import { Events } from "./events.js"
import { Sounds } from "./sounds.js"
import Theme from "./theme.js"


const sounds = Sounds()

const theme = Theme()

Events({
    sounds,
    theme
})


