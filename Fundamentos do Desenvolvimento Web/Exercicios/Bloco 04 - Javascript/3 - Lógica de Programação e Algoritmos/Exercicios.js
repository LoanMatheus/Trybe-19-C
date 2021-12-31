{
  console.log("Exercicio 01");
  /* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */
  let resultado = 10;
  for (let i = resultado - 1; i > 0; i -= 1) {
    resultado = resultado * i;
  }
  console.log(resultado);
}
console.log("");
{
  console.log("Exercicio 02");
  /* Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */
  let word = "trybe";
  let invertida = "";
  for (let i = word.length - 1; i >= 0; i -= 1) {
    invertida = invertida + word[i];
  }
  console.log(invertida);
}
console.log("");
{
  console.log("Exercicio 03");
  /* Considere o array de strings abaixo:*/
  let array = ["java", "javascript", "python", "html", "css"];
  /*Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */
  let maior = "";
  let menor = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
      maior = array[i];
    }
    if (array[i].length < menor.length) {
      menor = array[i];
    }
  }
  console.log("maior palavra: " + maior);
  console.log("menor palavra: " + menor);
}
console.log("");
{
  console.log("Exercicio 04");
  /* Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.*/
  let maiorPrimo = 0;
  for (let i = 0; i <= 50; i += 1) {
    let primo = true;
    for (let j = 2; j < i; j += 1) {
      if (i % j == 0) {
        primo = false;
      }
    }
    if (primo) {
      maiorPrimo = i;
    }
  }
  console.log(maiorPrimo);
}
console.log("");
{
  console.log("Bonus 01");
  /* Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */
  let n = 5;
  let linha = "";
  for (let i = 0; i < n; i += 1) {
    linha = linha + "*";
  }
  for (let i = 0; i < n; i += 1) {
    console.log(linha);
  }
}
console.log("");
{
  console.log("Bonus 02");
  /* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */
  let n = 5;
  let linha = "";
  for (let i = 0; i < n; i += 1) {
    linha = linha + "*";
    console.log(linha);
  }
}
console.log("");
{
  console.log("Bonus 03");
  /* Agora inverta o lado do triângulo. */
  let n = 5;

  for (let i = 1; i <= n; i += 1) {
    let linha = " ".repeat(n - i);
    linha = linha + "*".repeat(i);
    console.log(linha);
  }
}
console.log("");
{
  console.log("Bonus 04");
  /* Depois, faça uma pirâmide com n asteriscos de base: */
  let n = 5;
  let linha = "";
  let meio = (n + 1) / 2;
  let esq = meio;
  let dir = meio;
  for (let i = 0; i < meio; i += 1) {
    esq += 1;
    dir -= 1;
    for (let j = 1; j <= n; j += 1) {
      if (j >= esq || j <= dir) {
        linha += " ";
      } else {
        linha += "*";
      }
    }
    console.log(linha);
    linha = "";
  }
}
console.log("");
{
  console.log("Bonus 05");
  /* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: */
  let n = 21;
  let linha = "";
  let meio = (n + 1) / 2;
  let esq = meio;
  let dir = meio;
  for (let i = 0; i < meio; i += 1) {
    esq += 1;
    dir -= 1;
    if (i == 0 || i == meio - 1) {
      for (let j = 1; j <= n; j += 1) {
        if (j >= esq || j <= dir) {
          linha += " ";
        } else {
          linha += "*";
        }
      }
    } else if (i == 1) {
      for (let j = 1; j <= n; j += 1) {
        if (j == esq - 2 || j == dir + 1) {
          linha += "* ";
        } else if (j != meio) {
          linha += " ";
        }
      }
    } else {
      for (let j = 1; j <= n; j += 1) {
        if (j == esq - 2 || j == dir) {
          linha += " *";
        } else if (j != meio) {
          linha += " ";
        }
      }
    }
    console.log(linha);
    linha = "";
  }
}
console.log("");
{
  console.log("Bonus 05");
  /* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: */
  let n = 21;
  let linha = "";
  let meio = (n + 1) / 2;
  let esq = meio;
  let dir = meio;
  for (let i = 0; i < meio; i += 1) {
    esq += 1;
    dir -= 1;
    if (i == 0 || i == meio - 1) {
      for (let j = 1; j <= n; j += 1) {
        if (j >= esq || j <= dir) {
          linha += " ";
        } else {
          linha += "*";
        }
      }
    } else if (i == 1) {
      for (let j = 1; j <= n; j += 1) {
        if (j == esq - 2 || j == dir + 1) {
          linha += "* ";
        } else if (j != meio) {
          linha += " ";
        }
      }
    } else {
      for (let j = 1; j <= n; j += 1) {
        if (j == esq - 2 || j == dir) {
          linha += " *";
        } else if (j != meio) {
          linha += " ";
        }
      }
    }
    console.log(linha);
    linha = "";
  }
}
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = "*";
for (let line = 1; line <= middle; line += 1) {
  let outputLine = "";
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += " ";
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
console.log("");
{
  console.log("Bonus 06");
  /* Faça um programa que diz se um número definido numa variável é primo ou não. */
  let n = 11;
  let primo = 1;
  if (n < 1) {
    primo = 0;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      primo = primo * 0;
    }
    primo = primo * 1;
  }
  if (primo == 0) {
    console.log("Não é Primo!");
  } else {
    console.log("É Primo!");
  }
}
