export function Sounds(){
    const audioForest = new Audio("https://github.com/Hersonmei/Explorer/blob/main/Nivel%205/Desafio%2001/audio/Floresta.wav?raw=true")
    const audioRain = new Audio("https://github.com/Hersonmei/Explorer/blob/main/Nivel%205/Desafio%2001/audio/Chuva.wav?raw=true")
    const audioCafeteria = new Audio("https://github.com/Hersonmei/Explorer/blob/main/Nivel%205/Desafio%2001/audio/Cafeteria.wav?raw=true")
    const audioFireplace = new Audio("https://github.com/Hersonmei/Explorer/blob/main/Nivel%205/Desafio%2001/audio/Lareira.wav?raw=true")

    
    function cancelAudio(){
        audioForest.pause()
        audioRain.pause()
        audioCafeteria.pause()
        audioFireplace.pause()
    }

    return{
        audioForest,
        audioRain,
        audioCafeteria,
        audioFireplace,
        cancelAudio
    }

}