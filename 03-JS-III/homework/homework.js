// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
var numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var suma = numeros.reduce(function(acc, elemento) {
  return acc + elemento;
})
return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
var arregloDePares = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    arregloDePares.push(array[i]);
  }
}
return arregloDePares;
}


function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
var arregloAlCuadrado = [];
for (var i = 0; i < array.length; i++) {
  arregloAlCuadrado.push(array[i]**2)
}
return arregloAlCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
 var resultadoDeEnteros = array.reduce(function (acumulador, elemento) {
  return acumulador + elemento
 }); 
 return resultadoDeEnteros;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
let nuevoNumero = num.toString()
return nuevoNumero.length;
}  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
