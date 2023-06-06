var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('fotoHora')
document.getElementById('blocop').innerText = `agora sao ${hora} horas`

if(hora >= 6 && hora < 12){
    img.src = "estilos/imagens/diaadap.jpg"
} else if(hora >= 12 && hora < 18){
    img.src = "estilos/imagens/tardeadap.jpg"
    document.body.style.background = 'brown'
} else if(hora >= 18 && hora < 23){
    img.src = "estilos/imagens/noiteadap.jpg"
    document.body.style.background = 'rgba(2, 2, 82, 0.644)'
}else{
    img.src = "estilos/imagens/madrugadaadap.jpg"
    document.body.style.background = 'rgba(5, 13, 26, 0.712)'
}