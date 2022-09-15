
function carregar() {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();


if (hora >= 0 && hora < 12) {
    //bom dia #A5DAFE
    img.src = 'imagens/dia.png'
    document.body.style.background = '#A5DAFE'
    msg.innerHTML = `Bom dia, agora é ${hora} horas e ${minutos} minutos.`
    

} else if (hora > 12 && hora <= 18) {
    //tarde #FEE32C
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#FEE32C'
    msg.innerHTML = `Boa tarde, agora é ${hora} horas e ${minutos} minutos.`

} else {
    //noite #0A4773
    img.src = 'imagens/noite.png'
    document.body.style.background = '#0A4773'
    msg.innerHTML = `Boa noite, agora é ${hora} horas e ${minutos} minutos`

}

}