// // maneira tradicional do for
// var nomes = ["Maria", "Jose", "Ibag"];
// for (var i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// // atraves do método foreach
// /**
//  * forEach: passa por todos os elementos dentro de um array
//  *  recebe como parametro, outra fução;
//  *
//  */
// nomes.forEach(function(nome) {
//   console.log(nome);
// })

// // Obs: elementos adicinados/alterados depois da chamada do método não serão visto;
// var canais = ['Globo', 'Sbt', "Record"];
// canais.forEach(function(canal) {
//   canais.push("RecordTV"); // será ignorado
//   console.log(canal);
// })
// console.log(canais);


/**
 * method map
 *  muito util quando precisamos não somente passar por todos os elementos
 *  de um Array, também também modificá-los;
 */
// tradicional
var numeros = [1, 2, 3];
var dobro = [];
for (var i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2);
};

console.log(numeros);
console.log(dobro);

// com map (nova forma)
// o map executa a função callback recebida por parametro para cada
//  elemento iterado de numeros e constroi um novo array com base
//  nos retornos de cada uama das chamadas....ele devolve uma nova
//  instancia do array, então a lista original nunca é modificada
var dobro = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numeros);
console.log(dobro);


/**
 * method filter
 *  
 */


