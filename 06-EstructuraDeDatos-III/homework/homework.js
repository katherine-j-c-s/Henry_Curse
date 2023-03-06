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
class BinarySearchTree {
   constructor(){
      this.root = null;
      this._lenght = 0;
   }
   bts(value){
      let current = this.root.value;
      let valor = value.value;
      let haySiguiente = true;

      while (haySiguiente) {
         if (valor > current) {
            if (current.right === null) {
               current.right = value;
               haySiguiente = false;
            }else{
               current = current.right.value;
            } 
         }else if (value.value <= current.value){
            if (current.left === null) {
               current.left = value;
               haySiguiente = false;
            }else{
               current = current.left.value;
            }
         }
      }
   }
}
BinarySearchTree.prototype.size = function() {
   return this._lenght;
}
BinarySearchTree.prototype.insert = function(value) {
   if (this.root === null) {
      this.root = value;
   }
   this.bts(value)
   this._lenght++;
   return this.root
}
class Node {
   constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

let listaBTS = new BinarySearchTree();

let node1 = new Node(8);
let node2 = new Node(3);
let node3 = new Node(10);

listaBTS.insert(node1)
listaBTS.insert(node2)
listaBTS.insert(node3)

console.log(listaBTS);
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
