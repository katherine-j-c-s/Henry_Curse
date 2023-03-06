'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  var numero = n;
  var numeros = [numero];
  while (numero > 1) {
    numero--;
    numeros.push(numero);
  }
  var factorial = 1;
  for (let e = 0; e < numeros.length; e++) {
    factorial = factorial * numeros[e];
  }
  return factorial;
}
console.log(nFactorial(5));

function nFibonacci(n) {
  var posición = n + 1 ;
  //para que comienze en 0 y no en 1
  //asi recoge el numero por el indice del array
  var fibonacci = [0];
  var num = 1;
  while (posición > fibonacci.length) {
    fibonacci.push(num)
    let ultimo = fibonacci[fibonacci.length - 1];
    let anteUltimo = fibonacci[fibonacci.length - 2];
    num = ultimo + anteUltimo;
  }
  return fibonacci[posición -1];
}
console.log(nFibonacci(7));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor(){
      this.data = [];
  }
}

Queue.prototype.enqueue = function(value) { return this.data.push(value);};
Queue.prototype.dequeue = function() {
  if(this.size() === 0) {
    return undefined
  }
  return this.data.shift();};
Queue.prototype.size = function() { return this.data.length};

let instanciaQueue = new Queue();

instanciaQueue.enqueue("kathe");
instanciaQueue.enqueue("gabi");
instanciaQueue.enqueue("mama");
instanciaQueue.enqueue("papa");
instanciaQueue.dequeue();
instanciaQueue.dequeue();
instanciaQueue.dequeue();
instanciaQueue.dequeue();

instanciaQueue;

console.log(instanciaQueue.dequeue());
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
