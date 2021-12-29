console.log("Conteudo");
{
  console.log("01");
  /*Utilize o for para imprimir os elementos da lista groceryList com o console.log()*/

  let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

  for (let i = 0; i < groceryList.length; i += 1) {
    console.log(groceryList[i]);
  }
}
console.log("");
{
  console.log("02");
  /*Utilize o for/of para imprimir os elementos da lista names com o console.log() */
  let names = ["João", "Maria", "Antônio", "Margarida"];

  for (let nomes of names) {
    console.log(nomes);
  }
}
console.log("");
console.log("Exercicios");
console.log("");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
{
  console.log("01");
  /*Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()*/
  for (let numeros of numbers) {
    console.log(numeros);
  }
}
console.log("");
{
  console.log("02");
  /*Para o segundo exercício, some todos os valores contidos no array e imprima o resultado*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
  }
  console.log(resultado);
}
console.log("");
{
  console.log("03");
  /*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
  }
  let media = resultado / numbers.length;
  console.log(media);
}
console.log("");
{
  console.log("04");
  /*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    resultado = resultado + numbers[i];
  }
  let media = resultado / numbers.length;

  if (media > 20) {
    console.log("valor maior que 20");
  } else {
    console.log("valor menor ou igual a 20");
  }
}
console.log("");
{
  console.log("05");
  /*Utilizando for , descubra qual o maior valor contido no array e imprima-o"*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > resultado) {
      resultado = numbers[i];
    }
  }
  console.log(resultado);
}
console.log("");
{
  console.log("05");
  /*Utilizando for , descubra qual o maior valor contido no array e imprima-o"*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > resultado) {
      resultado = numbers[i];
    }
  }
  console.log(resultado);
}
console.log("");
{
  console.log("06");
  /*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"*/
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
      resultado += 1;
    }
  }
  if (resultado > 0) {
    console.log(resultado);
  } else {
    console.log("nenhum valor ímpar encontrado");
  }
}
console.log("");
{
  console.log("07");
  /*Utilizando for , descubra qual o menor valor contido no array e imprima-o"*/
  let resultado = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < resultado) {
      resultado = numbers[i];
    }
  }
  console.log(resultado);
}
console.log("");
{
  console.log("08");
  /*Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado*/
  let numeros = [];
  for (let i = 1; i <= 25; i += 1) {
    numeros.push(i);
  }
  console.log(numeros);
}
console.log("");
{
  console.log("09");
  /*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2*/
  let numeros = [];
  for (let i = 1; i <= 25; i += 1) {
    numeros.push(i / 2);
  }
  console.log(numeros);
}
console.log("");
{
  console.log("10");
  /*Ordene o array numbers em ordem crescente e imprima seus valores*/
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] < numbers[j]) {
        let trocar = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = trocar;
      }
    }
  }
  console.log(numbers);
}
console.log("");
{
  console.log("11");
  /*Ordene o array numbers em ordem decrescente e imprima seus valores*/
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] > numbers[j]) {
        let trocar = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = trocar;
      }
    }
  }
  console.log(numbers);
}
console.log("");
{
  console.log("12");
  /*Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.*/
  numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let novoArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
      let resultado = numbers[i] * numbers[i + 1];
      novoArray.push(resultado);
    } else if (i + 1 == numbers.length) {
      let resultado = numbers[i] * 2;
      novoArray.push(resultado);
    }
  }
  console.log(novoArray);
}
