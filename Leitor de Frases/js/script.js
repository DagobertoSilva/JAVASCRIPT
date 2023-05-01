document.getElementById('btn-ler-texto').addEventListener('click', convertTextAudio)

function convertTextAudio() {
    const _textodigitado = document.getElementById('txt-texto').value
    let _speeak = new SpeechSynthesisUtterance(_textodigitado)
    window.speechSynthesis.speak(_speeak)
}