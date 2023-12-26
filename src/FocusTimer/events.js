import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as elements from './elements.js' 
import { updatDisplay } from "./timer.js";

export function registerControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

    })
}


export function setMinutes(){
    elements.minutes.addEventListener('focus', ()  =>{
        elements.minutes.textContent = ""
    })

    elements.minutes.onkeypress = (event) => /\d/.test(event.key)

    elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time 

        updatDisplay()
        elements.minutes.removeAttribute('contenteditable')
    })
}