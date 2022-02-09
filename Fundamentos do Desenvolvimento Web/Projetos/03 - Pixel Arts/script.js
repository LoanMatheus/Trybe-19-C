const boardSize = document.querySelector('#board-size');
const paleta = document.querySelector('#color-palette');
const quadro = document.querySelector('#pixel-board');
const botaoVQV = document.querySelector('#generate-board');
const botaoLimpar = document.querySelector('#clear-board');

function addDiv(idDivRaiz, qt, nomeId, nomeClass) {
  for (let i = 1; i <= qt; i += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.id = nomeId + i;
    criaDiv.className = nomeClass;
    document.querySelector(idDivRaiz).appendChild(criaDiv);
  }
}

function removerDiv(a, b) {
  const idfilho = document.getElementById(a).childNodes;
  for (let i = idfilho.length - 1; i > 0; i -= 1) {
    if (idfilho[i].id !== b) {
      idfilho[i].remove();
    }
  }
}

function gerarCor(opacidade = 1) {
  const r = parseInt(Math.random() * 254);
  const g = parseInt(Math.random() * 254);
  const b = parseInt(Math.random() * 254);
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  /*
  fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript 
  */
}

function coresDisponiveis(idDivRaiz, idValor, nomeId, nomeClass) {
  const number = document.querySelector(idValor).value;
  addDiv(idDivRaiz, number - 1, nomeId, nomeClass);
  for (let i = 1; i < number; i += 1) {
    document.getElementById(nomeId + i).style.backgroundColor = gerarCor();
  }
}

function selecionaDiv(event) {
  if (document.querySelectorAll('.selected')[0] == undefined) {
    event.target.classList.add('selected');
  } else {
    document.querySelectorAll('.selected')[0].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function pintaQuadro(event) {
  event.target.style.backgroundColor =
    document.querySelectorAll('.selected')[0].style.backgroundColor;
}

paleta.addEventListener('click', selecionaDiv);
quadro.addEventListener('click', pintaQuadro);

window.onload = coresDisponiveis(
  '#color-palette',
  '#colors',
  'color-',
  'color colorBox box'
);

function mudarQtCores() {
  removerDiv('color-palette', 'color-0');
  coresDisponiveis('#color-palette', '#colors', 'color-', 'color colorBox box');
}

document.querySelector('#colors').addEventListener('change', mudarQtCores);

function quadroPixels(idDivRaiz, idValor, nomeId, nomeClass) {
  let number = document.querySelector(idValor).value;
  if (number == '') {
    addDiv(idDivRaiz, 25, nomeId, nomeClass);
    for (let i = 1; i <= 25; i += 1) {
      document.getElementById(nomeId + i).style.backgroundColor =
        'rgb(255, 255, 255)';
    }
    alert('Board inválido!');
  } else if (number < 5) {
    addDiv(idDivRaiz, 25, nomeId, nomeClass);
    for (let i = 1; i <= 25; i += 1) {
      document.getElementById(nomeId + i).style.backgroundColor =
        'rgb(255, 255, 255)';
    }
  } else if (number < 51) {
    addDiv(idDivRaiz, number * number, nomeId, nomeClass);
    for (let i = 1; i <= number * number; i += 1) {
      document.getElementById(nomeId + i).style.backgroundColor =
        'rgb(255, 255, 255)';
    }
  } else if (number < 51) {
    addDiv(idDivRaiz, number * number, nomeId, nomeClass);
    for (let i = 1; i <= number * number; i += 1) {
      document.getElementById(nomeId + i).style.backgroundColor =
        'rgb(255, 255, 255)';
    }
  } else {
    addDiv(idDivRaiz, 2500, nomeId, nomeClass);
    for (let i = 1; i <= 2500; i += 1) {
      document.getElementById(nomeId + i).style.backgroundColor =
        'rgb(255, 255, 255)';
    }
  }
}

boardSize.value = 5;
window.onload = quadroPixels(
  '#pixel-board',
  '#board-size',
  'pixel',
  'pixel box'
);
boardSize.value = '';

function mudarQtPixels() {
  removerDiv('pixel-board');
  quadroPixels('#pixel-board', '#board-size', 'pixel', 'pixel box');
}

botaoVQV.addEventListener('click', mudarQtPixels);
botaoLimpar.addEventListener('click', mudarQtPixels);
