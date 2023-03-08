'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let resultado = [1];
  let numero = num;
  let resto = null;
  let dividendo= 2;
  if (numero === 1) {
    return [1]
  }
  for (let e = 0; e < numero; e++) {
    resto = numero % dividendo;
    if (resto === 0) {
      resultado.push(dividendo);
      numero = numero / dividendo
    }if(resto === 1){
      dividendo++
    }
  }
  let addLast = numero
  resultado.push(addLast)
  return resultado;
}
console.log(factorear(1));
// BUBBLE SORT
//toma dos numeros y los compara
//ve si el izqu es el menor y el derch el mayor
//si el derecho es menor, coloca el izq en el derch y el derecho en el izquierdo
//luego ompara el derecho con el siguiente
//y vuelve a hacer los mismos pasos hasta que ya no haya un siguiente
//(esto lo repite hasta que queden ordenados de menor a mayor)

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cambio = true
  while (cambio) {
    cambio = false
    for (let e = 0; e < array.length - 1; e++) {
      if (array[e] > array[e+1]) {
        let aux = array[e]
        array[e] = array[e+1]
        array[e+1] = aux
        cambio = true
      }
    }
  }
  
  return array          
}                                                                                                                
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      //comienza desde el indice y deciende hasta ver si hay aulguno menor para cambiarlo 
      if (array[j] < array[j-1]) {//si j (indice) es menor al anterior, poner el antenior en al indice y j en el anteior
        //para ordenarlos de menor a mayor
        let aux = array[j]
        array[j] = array[j-1]
        array[j-1] = aux
      }
    }
  }
  return array
}
let arr = [10, -2, -7, 4]

console.log(insertionSort(arr));
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //i avanza una posicion y j recorre todo el array
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {//comienza desde el que esta adelante del indice
      if (array[i] > array[j]) { //indice es mayor al j? si es mayor ,cambia el indice por el j  y sigue
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
      }
      
    }
  }
  return array
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
