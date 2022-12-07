function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento && elemento.localName === 'audio') {
            elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*let contador = 0

while (contador < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas [contador].classList[1]
    const instumentro = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[contador].onclick = function() {
        tocaSom(idAudio)
    } 

    contador = contador + 1

    console.log(contador)
} */

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas [contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[contador].onclick = function() {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (e) {
        if(e.code === 'Space' || e.code === 'Enter'){
        tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup= function () {
        tecla.classList.remove('ativa')
    }

}
