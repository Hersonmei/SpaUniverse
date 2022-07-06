import { Events } from "./events.js"
import { Sounds } from "./sounds.js"
import Theme from "./theme.js"
import Timer from "./timer.js"

const sounds = Sounds()

const theme = Theme()

const timer = Timer({theme})

Events({
    sounds,
    theme,
    timer
})


