import {
    whiteMode,
    darkMode,
    body,
    svg,
    btnPanel,
    timerElements
} from  "./elements.js"


export default function Theme() {

    function addClassPlay(){
        timerElements.classList.add('playActive')
    }

    function removeClassActive(){
        btnPanel.forEach(btn => 
            btn.classList.remove('active')
        )
    }
    
    function whiteTheme() {
        body.classList.add('dark')
        darkMode.classList.add('dark')
        whiteMode.classList.add('dark')
        svg.forEach(item => item.classList.add('dark'))
        btnPanel.forEach(item => item.classList.add('dark'))
    }
    
    function darkTheme() {
        body.classList.remove('dark')
        darkMode.classList.remove('dark')
        whiteMode.classList.remove('dark')
        svg.forEach(item => item.classList.remove('dark'))
        btnPanel.forEach(item => item.classList.remove('dark'))
    }

    return{
        addClassPlay,
        removeClassActive,
        whiteTheme,
        darkTheme
    }
}
