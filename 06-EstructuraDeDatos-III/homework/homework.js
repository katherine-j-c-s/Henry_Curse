'use strict';
/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//VAMOS A APLICAR RECURCIONES PARA PODER RECORRERLO LAS VECES NECESARIAS
class BinarySearchTree {
   constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
   }
}
BinarySearchTree.prototype.size = function() {
   if (!this.left && !this.right) {//no tiene nada en la izq y derch
      return 1
   }
   if (!this.left) return 1 + this.right.size()//si no tiene nada la izq verifica si hay algo a la derecha
   if (!this.left) return 1 + this.right.size()//la derecha es null y se verifica si en la izq hay algo
   if (this.left && this.right) return 1 + this.left.size() + this.right.size() // si ambos tiene algo , suma sus sizes con el root(1)
}
BinarySearchTree.prototype.insert = function(value) {
   if (value > this.value) {//si es mayor
      if (!this.right) { //si esta vacio
         this.right =new BinarySearchTree(value);//agrega nuevo arbol creado
      } else {
         this.right.insert(value);//va al valor del siguiente y vuelve a recorrer
      }
   }else {
      if (!this.left) { //si esta vacio
         this.left =new BinarySearchTree(value);//agrega nuevo arbol creado
      } else {
         this.left.insert(value);//va al valor del siguiente y vuelve a recorrer
      }
   }
}
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value)return true //si es igual al root
   if (value > this.value) {//si es mayor
      if (this.right === null) {//si no hay nada
         return false
      }else {//si hay algo
         return this.right.contains(value)//lo vuerves a recursar al valor con el contains
      }
   }if (value <= this.value) {//si es menor
      if (this.left === null) {//si no hay nada
         return false
      }else {
         return this.left.contains(value)//lo vuerves a recursar al valor con el contains
      }
   }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
//pasa como parametro una funcion y un tipo de orden
//APLICAMIS LA MISMA FUNCION DE MANERA RECURSIVA (se recorre a si misma hasta que todo se cumpla)
if (orden === "pre-order") {//----> V L R
   cb(this.value);//agrega valor
   this.left && this.left.breadthFirstForEach(cb,orden)//si en izquierda hay algo aplica la recursividad en ella
   this.right && this.right.breadthFirstForEach(cb,orden)//si en derecha hay algo aplica la recursividad en ella
}if (orden === "post-order") {//----> L R V
   this.left && this.left.breadthFirstForEach(cb,orden)//si en izquierda hay algo aplica la recursividad en ella
   this.right && this.right.breadthFirstForEach(cb,orden)//si en derecha hay algo aplica la recursividad en ella
   cb(this.value);  
}else {//in-order ---> L V R
   this.left && this.left.breadthFirstForEach(cb,orden)//si en izquierda hay algo aplica la recursividad en ella
   cb(this.value);
   this.right && this.right.breadthFirstForEach(cb,orden)//si en derecha hay algo aplica la recursividad en ella
}
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb,queue=[]) {
   //usamos queue para ordenar progresivamente
   //creamos la recursividad
   if(this.left){//si hay algo en la izq
      queue.push(this.left)
   }if (this.right) {//si hay algo en la derch
      queue.push(queue)
   }
   cb(this.value)
   if (queue.length > 0) {
      queue.shift().primerObj.breadthFirstForEach(cb,queue)
      //saca el primer objeto y le pasa la recursividad
   }
}
const listaBTS = new BinarySearchTree(8);

let node1 =3;
let node2 =10;
let node3 =1;
let node4 =6;
let node5 =14;

listaBTS.insert(node1)
listaBTS.insert(node2)
listaBTS.insert(node3)
listaBTS.insert(node4)
listaBTS.insert(node5)

listaBTS.size()
listaBTS.contains(8)

console.log(listaBTS);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
