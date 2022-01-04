/* Vai receber uma array de strings.
Vai tratar cada item dessa lista procurando por uma palavra x.
Precisa informar:
Quantas vezes a palavras apareceu no total.
Quantas vezes ela apareceu em cada linha.
Em quais linhas ela apareceu. */

let lista = ['Messias, 123 Teste', 'Messias AAA', 'MESSIAS Mssias messias Messias Messias Messias Messias Messias, exercicio feito', 'Sem palavra pra encontrar'];
let search = "Messias";

let linhas = [];
let xTotalLinha = [];
let xTotalArray = 0;

for (let i = 0; i < lista.length; i += 1) {
  var re = ',|.|:|.\\s';
  let palavras = lista[i].split(",|,\\s");
  let linha = 0;
  let xTotalNaLinha = 0;
  for (let j = 0; j < palavras.length; j += 1) {
    if (palavras[j].toLowerCase() === search.toLowerCase()) {
      xTotalNaLinha += 1;
      linha = 1 + i;
      xTotalArray += 1;
    }
  }
  if (linha > 0) {
    linhas.push(linha);
  }
  if (xTotalNaLinha > 0) {
    xTotalLinha.push(xTotalNaLinha);
  }
}

console.log("Palavra pesquisada: " + search);
console.log("Encontrada nas linhas: " + linhas);
console.log("Quantidade em cada linha: " + xTotalLinha);
console.log("Quantidade Total Encontrada: " + xTotalArray);