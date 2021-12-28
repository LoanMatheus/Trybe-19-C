{
  /* 01 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. */

  let a = 2;
  let b = 4;

  let adição = a + b;
  let subtração = a - b;
  let multiplicação = a * b;
  let divisão = a / b;
  let modulo = a % b;

  console.log(adição);
  console.log(subtração);
  console.log(multiplicação);
  console.log(divisão);
  console.log(modulo);
}

{
  /* 02 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

  const a = 5;
  const b = 8;

  if (a > b) {
    console.log(a);
  }
  if (a < b) {
    console.log(b);
  }
}

{
  /* 03 -Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

  const a = 10;
  const b = 3;
  const c = 5;

  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  }
}

{
  /* 04 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

  const a = 0;
  if (a > 0) {
    console.log("positive");
  } else if (a < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}

{
  /* 05 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
  const a = 90;
  const b = 45;
  const c = 5;

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
{
  /* 06 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

  let peca = "rainha";
  switch (peca.toLowerCase()) {
    case "rei":
      console.log("Uma casa apenas para qualquer direção.");
      break;
    case "rainha":
      console.log("Diagonal, horizontal e vertical.");
      break;
    case "bispo":
      console.log("Diagonal.");
      break;
    case "cavalo":
      console.log("movimento em L, pode pular sobre as peças.");
      break;
    case "torre":
      console.log("Horizontal e vertical.");
      break;
    case "peao":
      console.log(
        "Apenas uma casa para frente, no primeiro movimento podem ser duas casas. Come uma casa diagonal a frente"
      );
      break;
    default:
      console.log("erro - peça invalida");
  }
}

{
  /* 07 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. */
  let nota = 90;

  if (nota < 0 || nota > 100) {
    console.log("Erro - Nota Invalida");
  } else {
    if (nota >= 90) {
      console.log("A");
    } else if (nota >= 80) {
      console.log("B");
    } else if (nota >= 70) {
      console.log("C");
    } else if (nota >= 60) {
      console.log("D");
    } else if (nota >= 50) {
      console.log("E");
    } else if (nota < 50) {
      console.log("F");
    }
  }
}
{
  /* 08 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . */

  const a = 3;
  const b = 5;
  const c = 6;

  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log("Par = true");
  } else {
    console.log("Par = false");
  }
}
{
  /* 09 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for impar. Caso contrário, ele retorna false . */

  const a = 2;
  const b = 1;
  const c = 6;

  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log("Impar = true");
  } else {
    console.log("Impar = false");
  }
}
{
  /* 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. */
  const valorDeVenda = 1.92;
  const imposto = 1.2;
  const valorDeCusto = 0.9 * imposto;
  const qtdVendida = 1000;

  if (valorDeCusto < 0 || valorDeVenda < 0) {
    console.log("erro");
  } else {
    let lucro = (valorDeVenda - valorDeCusto) * qtdVendida;
    console.log("Lucro = "+lucro);
  }
}
{
  /* 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

  const salarioBruto = 25100;

  let INSS;
  if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
  } else if (salarioBruto >= 5189.83) {
    INSS = 570.88;
  }

  let salarioBase = salarioBruto - INSS;

  let IR;
  if (salarioBase <= 1903.98) {
    IR = 0;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = salarioBase * 0.075 - 142.8;
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = salarioBase * 0.15 - 354.8;
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = salarioBase * 0.225 - 636.13;
  } else if (salarioBase > 4664.68) {
    IR = salarioBase * 0.275 - 869.36;
  }

  let salarioLiquido = salarioBase - IR;

  console.log("Salario = " + salarioLiquido);
  console.log("INSS = " + INSS);
  console.log("IR = " + IR);
}
