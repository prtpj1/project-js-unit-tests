/* eslint-disable no-tabs */
/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (notas) => {
let notasValues = Object.values(notas);
let notasKeys = Object.keys(notas).length;

  if (notasValues.some((check) => typeof check !== 'number')) {
    return undefined;
  }

  if (notasValues.some((check) => check === '')) {
    return undefined;
  }

  if (notasValues.every((check) => check === [])) {
    return undefined;
  }

  let notasSoma = notas.reduce(function (total, num) {
    return total + num;
  });
  
  let result = Math.round(notasSoma / notasKeys);
    return result;
};

module.exports = average;
