import state from './state.js'
import * as element from './elements.js'

export function updatDisplay(minutes, seconds){
    minutes  = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    element.minutes.textContent =String(minutes).padStart(2, "0")
    element.seconds.textContent =String(seconds).padStart(2,"0")
}