/* 1 - Acesse o elemento elementoOndeVoceEsta . */
document.querySelector('#elementoOndeVoceEsta');

/* 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.*/
elementoOndeVoceEsta.parentNode.style.backgroundColor = 'blue';

/* 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */
document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Sou o primeiro Filho';

/* 4 - Acesse o primeiroFilho a partir de pai . */
console.log(document.querySelector('#pai').firstElementChild);

/* 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta . */
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

/* 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta . */
console.log(elementoOndeVoceEsta.nextSibling.textContent);

/* 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta . */
console.log(elementoOndeVoceEsta.nextElementSibling);

/* 8 - Agora acesse o terceiroFilho a partir de pai . */
console.log(pai.children[2]);

/* 9 - Crie um irmão para elementoOndeVoceEsta . */
let criaIrmaoOndeVoceEsta = document.createElement('section');
criaIrmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
pai.appendChild(criaIrmaoOndeVoceEsta);


/* 10 - Crie um filho para elementoOndeVoceEsta. */
let criaFilhoOndeVoceEsta = document.createElement('section')
criaFilhoOndeVoceEsta.id = 'filhoOndeVoceEsta'
elementoOndeVoceEsta.appendChild(criaFilhoOndeVoceEsta)

/* 11 - Crie um filho para primeiroFilhoDoFilho. */
let criaFilhoPrimeiroFilhoDoFilho = document.createElement('section');
criaFilhoPrimeiroFilhoDoFilho.id = 'tataraneto'
primeiroFilhoDoFilho.appendChild(criaFilhoPrimeiroFilhoDoFilho); //*

/* 12 - A partir desse filho criado, acesse terceiroFilho. */
document.querySelector('#tataraneto').parentNode.parentNode.nextElementSibling

/* 13 - Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho . */
function removerDiv(a,b){
let idfilho = document.getElementById(a).childNodes;
for(let i = idfilho.length - 1; i > 0; i-=1){
  if(idfilho[i].id != b){
  idfilho[i].remove();
  }  
  }
}

removerDiv('pai','elementoOndeVoceEsta');
removerDiv('elementoOndeVoceEsta','primeiroFilhoDoFilho')
removerDiv('primeiroFilhoDoFilho')