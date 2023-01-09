function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manhaSF.png'
        document.body.style.background = '#fdb97a'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tardeSF.png'
        document.body.style.background = '#e79759'
    }else{
        //BOA NOITE!!
        img.src = 'NoiteSF.png'
        document.body.style.background = '#2776a9'
    }
}

