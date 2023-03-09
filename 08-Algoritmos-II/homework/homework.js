'use strict'
// No cambies los nombres de las funciones.
class ListNumeros {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
ListNumeros.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new ListNumeros(value)
    }
    this.left.insert(value)
  }if (value > this.value) {
    if (!this.right) {
      this.right = new ListNumeros(value)
    }
    this.right.insert(value)
  }
}
ListNumeros.prototype.inOrder = function (cb) {
  if (this.left) {
    this.left.inOrder(cb)
  }cb(this.value)
  if(this.right){
    this.right.inOrder(cb)
  }
}
ListNumeros.prototype.recorre = function (value){
  if (value.length > 1 ) {
    let valorAInsertar = pivote(value);
    this.insert(valorAInsertar);
    let mayorYmenor = menorMayor(value,valorAInsertar);
    if (mayorYmenor.menor.length > 1) {
      this.recorre(mayorYmenor.menor)
    }if (mayorYmenor.menor.length === 1) {
      let insertaNum = mayorYmenor.menor[0]
      this.insert(insertaNum)
    }
    if (mayorYmenor.mayor.length > 1) {
      this.recorre(mayorYmenor.mayor)
    }if (mayorYmenor.mayor.length === 1) {
      let insertaNum = mayorYmenor.mayor[0]
      this.insert(insertaNum)
    }
  }
}
function pivote(array) {
  let numRandom = Math.floor(Math.random()*array.length)
  let pivote = array[numRandom]
  return pivote
}
function menorMayor(arr,num) {
  let obj = {
    menor: [],
    mayor: []
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]<num && arr[i] !== num) {
      obj.menor.push(arr[i])
    }
    else if (arr[i]>num && arr[i] !== num){
      obj.mayor.push(arr[i])
    }
  }
  return obj;
}
let array = [10, -2, -7, 4]

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
  
  let instancia = new ListNumeros(pivote(array))
  let menoresYmayores = menorMayor(array, instancia.value)
  let menores = menoresYmayores.menor;
  let mayores = menoresYmayores.mayor;
  instancia.recorre(menores)
  instancia.recorre(mayores)
  var treeOrdenado = []

  function agregarArr(params) {treeOrdenado.push(params)};  
  instancia.inOrder(agregarArr)
  
  return treeOrdenado

}
quickSort(array)
console.log(quickSort(array));
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
