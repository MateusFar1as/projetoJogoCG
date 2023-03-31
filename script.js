const jogador = document.getElementById('jogador')
const retangulo = document.getElementById('retangulo')
const buraco = document.getElementById('buraco')
const retangulo2 = document.getElementById('retangulo2')
const buraco2 = document.getElementById('buraco2')
const pontos = document.getElementById('pontos')
let i = 0,j = 0;

function addAnimacao2(){
    retangulo2.classList.add('animacao')
    buraco2.classList.add('animacao')
}
function comecar(){
    if(retangulo.classList != 'animacao'){
        retangulo.classList.add('animacao')
        buraco.classList.add('animacao')
        setTimeout(addAnimacao2,1000)   
    }    
}
comecar()

document.addEventListener('keydown',(e) => { 
    comecar()
    const jogadorX = parseInt(window.getComputedStyle(jogador).getPropertyValue('left'))
    const jogadorY = parseInt(window.getComputedStyle(jogador).getPropertyValue('top'))
    switch (e.keyCode) {
        case 37:
        case 65:
            jogador.style.left = jogadorX - 30 + 'px'
            break;
        case 38:
        case 87:
            jogador.style.top = jogadorY - 30 + 'px'
            break
        case 39:
        case 68:
            jogador.style.left = jogadorX + 30 + 'px'
            break;
        case 40:
        case 83:
            jogador.style.top = jogadorY + 30 + 'px'
            break
    }
    if(jogadorX <= 0){
        jogador.style.left = 5 + 'px'
    }
    if(jogadorX >= 370){
        jogador.style.left = jogadorX - 5 + 'px'
    }
    if(jogadorY >= (document.querySelector('body').offsetHeight) - 80){
        jogador.style.top = jogadorY - 10 + 'px'
    }
})

buraco.addEventListener('animationiteration',() => {
    let aleatorio = Math.floor(Math.random() * 310)
    buraco.style.left = aleatorio + 'px'
})
buraco2.addEventListener('animationiteration',() => {
    let aleatorio = Math.floor(Math.random() * 310)
    buraco2.style.left = aleatorio + 'px'
})


setInterval(() => {
    const retanguloWidth = parseInt(window.getComputedStyle(retangulo).getPropertyValue('width'))
    const retanguloHeight = parseInt(window.getComputedStyle(retangulo).getPropertyValue('height'))
    const retanguloY = parseInt(window.getComputedStyle(retangulo).getPropertyValue('top'))
    const retanguloX = parseInt(window.getComputedStyle(retangulo).getPropertyValue('left'))

    const buracoWidth = parseInt(window.getComputedStyle(buraco).getPropertyValue('width'))
    const buracoHeight = parseInt(window.getComputedStyle(buraco).getPropertyValue('height'))
    const buracoY = parseInt(window.getComputedStyle(buraco).getPropertyValue('top'))
    const buracoX = parseInt(window.getComputedStyle(buraco).getPropertyValue('left'))

    const retangulo2Width = parseInt(window.getComputedStyle(retangulo2).getPropertyValue('width'))
    const retangulo2Height = parseInt(window.getComputedStyle(retangulo2).getPropertyValue('height'))
    const retangulo2Y = parseInt(window.getComputedStyle(retangulo2).getPropertyValue('top'))
    const retangulo2X = parseInt(window.getComputedStyle(retangulo2).getPropertyValue('left'))

    const buraco2Width = parseInt(window.getComputedStyle(buraco2).getPropertyValue('width'))
    const buraco2Height = parseInt(window.getComputedStyle(buraco2).getPropertyValue('height'))
    const buraco2Y = parseInt(window.getComputedStyle(buraco2).getPropertyValue('top'))
    const buraco2X = parseInt(window.getComputedStyle(buraco2).getPropertyValue('left'))

    const jogadorWidth = parseInt(window.getComputedStyle(jogador).getPropertyValue('width'))
    const jogadorHeight = parseInt(window.getComputedStyle(jogador).getPropertyValue('height'))
    const jogadorY = parseInt(window.getComputedStyle(jogador).getPropertyValue('top'))
    const jogadorX = parseInt(window.getComputedStyle(jogador).getPropertyValue('left'))

    if((jogadorX < buracoX + buracoWidth && 
        jogadorX + jogadorWidth > buracoX &&
        jogadorY < buracoY + buracoHeight &&
        jogadorY + jogadorHeight > buracoY)||
        (jogadorX < buraco2X + buraco2Width && 
         jogadorX + jogadorWidth > buraco2X &&
         jogadorY < buraco2Y + buraco2Height &&
         jogadorY + jogadorHeight > buraco2Y)){
            if(i < 1){
                i = 1;
            }
            pontos.classList.remove('rodar')
    }else if((jogadorX < retanguloX + retanguloWidth && 
            jogadorX + jogadorWidth > retanguloX &&
            jogadorY < retanguloY + retanguloHeight &&
            jogadorY + jogadorHeight > retanguloY) ||
            (jogadorX < retangulo2X + retangulo2Width && 
             jogadorX + jogadorWidth > retangulo2X &&
             jogadorY < retangulo2Y + retangulo2Height &&
             jogadorY + jogadorHeight > retangulo2Y)){
            retangulo.classList.remove('animacao')
            buraco.classList.remove('animacao')
            retangulo2.classList.remove('animacao')
            buraco2.classList.remove('animacao')
            alert(`Você perdeu. Pontuação: ${j}`)
            jogador.style.top = 89 + '%'
            jogador.style.left = 180 + 'px'
            pontos.innerHTML = `0`
            j = 0
    }else{
        j += i;
        i = 0;
        pontos.innerHTML = `${j}`
    }
},0)