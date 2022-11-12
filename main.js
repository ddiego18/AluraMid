function tocaSom(seletorAudio) {
  const elemento = document.querySelector(`${seletorAudio}`);

  if (elemento === null) {
    alert('Elemento não encontrado.');
  }
  else if (elemento.localName !== 'audio') {
    alert('O elemento deve ser do tipo áudio.');
  }
  else {
    elemento.play();
  }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {

  const tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => tocaSom(idAudio);

  tecla.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = () => tecla.classList.remove('ativa');

}




