// default import
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  secondsDisplay,
  minutesDisplay,
  buttonStop
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const sound = Sounds()

const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  sound,
  resetControls: controls.reset
})

const events = Events({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  sound,
  timer,
  controls
})

