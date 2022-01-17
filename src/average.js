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
	let notasSoma = notas.reduce(function (total, num) {
		return total + num;
	});
  
	if (notasValues.some((check) => check === '')) {
		console.log('vazio');
		return undefined;
	} else if (notasValues.some((check) => check === isNaN)) {
		console.log('nan');
		return undefined;
	} else {
		let result = Math.round(notasSoma / notasKeys);
		console.log(result);
		return result;
	}
};
average(["t", 4, 5]);

module.exports = average;
// average([3, 4, 5]);
// console.log('undefined');
// console.log(result);
