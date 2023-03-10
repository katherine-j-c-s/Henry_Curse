'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //sacar el pivote(root)
  //dividimos menor a mayor
  //de esa divicion le sacamos un pivote a menor(left) y a mayor(right)
  //hacer esto hasta que menor y mayor.lenght sea igual a 1
  // cuando sea igual a 1 agrega al proximo valor de izq o derch
    if (array.lenght <= 1) return array
    let pivote = Math.floor(array.length / 2)
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivote) {
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }
    const result = quickSort(left).concat(array[pivote]).concat(quickSort(right));
    return result
}
console.log(quickSort([5,1,2]));
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
    if (array.lenght <= 1) return array //retorna si esta vacio o tiene solo un elemento
    let numMedium = Math.floor(array.length / 2) //nos da el num de la mitad
    let left = array.slice(0,numMedium);//nos corta el array desde 0 a la mitad
    let right = array.slice(0,numMedium);// nos corta al array desde la mitad hasta el final
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left, right) {
    const result = [];
    let indexL = 0;
    let indexR = 0;
    while (indexL < left.lenght && indexR < right.length) {
        if (left[indexL]< right[indexR]) {
            result.push(left[indexL])
            indexL++
        }else{
            result.push(right[indexR])
            indexR++
        }
    }
    return result.concat(left.slice(indexL)).concat(right.slice(indexR))
}
console.log(mergeSort([5,1,2]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
