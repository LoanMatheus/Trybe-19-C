let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(
  "A jogadora " +
    player["name"] +
    " " +
    player["lastName"] +
    " foi eleita a melhor do mundo por " +
    player.bestInTheWorld.length +
    " vezes."
);
console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata"
);

console.log(" ");

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let pessoa in names) {
  console.log("Ola " + names[pessoa]);
}

console.log("");

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let keys in car) {
  console.log(keys + " " + car[keys]);
}

console.log("");

{
  /* 01 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. */
  function soma(a, b) {
    let adicao = a + b;
    console.log(adicao);
  }

  function subtracao(a, b) {
    let subtração = a - b;
    console.log(subtração);
  }

  function multiplicacao(a, b) {
    let multiplicação = a * b;
    console.log(multiplicação);
  }

  function divisao(a, b) {
    let divisao = a / b;
    console.log(divisao);
  }

  function modulo(a, b) {
    let modulo = a % b;
    console.log(modulo);
  }

  a = 2;
  b = 2;
  soma(a, b);
  subtracao(a, b);
  multiplicacao(a, b);
  divisao(a, b);
  modulo(a, b);
}

console.log();

{
  /* 02 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

  function numeroMaior(a, b) {
    if (a > b) {
      console.log(a);
    }
    if (a < b) {
      console.log(b);
    }
  }
  const a = 10;
  const b = 8;
  numeroMaior(a, b);
}

console.log();

{
  /* 03 -Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

  function numeroMaiorEntreTres(a, b, c) {
    if (a > b && a > c) {
      console.log(a);
    } else if (b > a && b > c) {
      console.log(b);
    } else if (c > a && c > b) {
      console.log(c);
    }
  }

  const a = 10;
  const b = 23;
  const c = 55;

  numeroMaiorEntreTres(a, b, c);
}

console.log();

{
  /* 04 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

  function valorNumero(){
  
  if (a > 0) {
    console.log("positive");
  } else if (a < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}

const a = -10;
valorNumero(a);
}

console.log()

{
  /* 05 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
  function angulosDeTriangulo(a, b, c){
  if (a < 0 || b < 0 || c < 0) {
    console.log("erro");
  } else {
    if (a + b + c === 180) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
const a = 90;
const b = 45;
const c = 45;

angulosDeTriangulo(a, b, c)

}

let d = "2";
let e = 2;

console.log(e == d)

let f = 5;
let g = 2;
console.log(f);
f += g;
console.log(f);
g -= f;
console.log(g);

let eu = ['Alguém da Trybe', ' que é super legal'];
let string = eu[0] + eu[1] + '!';

console.log(string)

let j = "Serei a melhor pessoa dev";
let i = "Esse é meu jeito dev de ser!";
let num = 2;
let strings = [j, i];

console.log((typeof num) == (typeof 'number'));

