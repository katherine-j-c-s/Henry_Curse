'use strict';

const { cleanUrl } = require("@11ty/eleventy-cache-assets/src/RemoteAssetCache");

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class LinkedList{
  constructor(){
    this.head = null;
    this._length = 0; //propiedad privada
  }
  add(value){
    const newNode = new Node(value) // node{ value:value; next:null }
    if (!this.head){ //si no tiene nada
      this.head = newNode;
    }else {
      let current = this.head
      while (current.next !== null) {//sigue abanzando mientras no sea null
        current= current.next//guarda el nodo que tiene null
      }
      current.next = newNode; //guarda el current en la prop next
    }
    this._length++;
    return newNode;
  }
  remove(){
    let current = this.head
    if (!current) {
      return null // para decir que esta vacia
    } else if (current.next === null) {
      this.head = null // ve si el siguiente es null(para saber si es el ultimo) y lo elimina
      return current.value //retorna el valor
    }else {
      while (current.next.next !== null) { //mientras no sea null (osea el ultimo)
        current = current.next; //guarda el siguiente valor
      }
      const value = current.next.value // ultimo valor
      current.next = null; //lo elimina
      this._length--;//le resta a la cantidad
      return value //retorna el valor
    }
  }
  search(value){
    let current = this.head;
    if (!current) {//entrta si curren no tiene nada
      return null
    }
    if (typeof value === "function"){//revisa si es tipo funcion
      while (current) {//mientras tenga info recorre los nodes
        if (value(current.value)) {// verifica si lo que paso por par es igual al valor
          return current.value; //si es el valor ,retorna el valor
        }
        current = current.next//pasa hastya el next que sea null
      }

    }
    while (current) {//mientras current tenga info
      if (current.value === value) {// verifica si lo que paso por par es igual al valor
        return current.value//si es el valor ,retorna el valor
      }
      current = current.next//pasa hastya el next que sea null
    }
    return null //si encontro nada retorna null
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }

}

let intanciaList = new LinkedList();

let node1 = 1;
let node2 = 2;
let node3 = 3;

// let instanciaNode2 = new Node(2)

intanciaList.add(node1)
intanciaList.add(node2)
intanciaList.add(node3)

console.log(intanciaList);

intanciaList.remove()
intanciaList.remove()

console.log(intanciaList);


intanciaList.search(node1)
console.log(intanciaList.search(node1));

   
/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
//charCodeAt(string) metodo que devuelve su codigo en num
class HashTable{
  constructor(){
    this.buckets = [];
    this.numBuckets = 35;
  }
  hash(str){//suma cada string(codigo num) y saca el modulo del resultado
    var result = 0;
    for (let e = 0; e < str.length; e++) {
      result = result + str.charCodeAt(e) 
      //suma cada codigo numero de cada letra
      //y lo gurarda en result
    }
    return result % this.numBuckets //se saca el resto con el moduolo
    //para saber cuando es el valor que queda entre 0 y 35
  }

  //se encarga de agregar un objeto(que seria el value) al array de buckets
  //usando el hash con el key que agregen para saber la posicion en donde ponerlo
  set(key, value){
    if (typeof key !== "string")throw TypeError ("keys must be un string");//error cuando no es string
    let numBox = this.hash(key);//28
    if( this.buckets[numBox]===undefined) {//si en esa posocion no esta definido
    this.buckets[numBox] = {}//crea un objeto en la posicion del hash
    }
    this.buckets[numBox][key] = value;//agrega el valor(value) y la propiedad[key] al objeto
    return this.buckets[numBox]
  }
  get(key){//busca y si lo encuentra devuelve el valor
    let numBox= this.hash(key); //da el num de la ky
    if (this.buckets[numBox][key]) {//si tiene la propiedad 
      return this.buckets[numBox][key] //devuelve el valor
    }
  }
  hasKey(key){//busca y si lo encuentra devuelve true sino false
    let numBox= this.hash(key); //da el num de la ky
    if (this.buckets[numBox][key]) {//si tiene la propiedad 
      return true //devuelve booleano
    }else{
      return false//devuelve booleano
    }
  }
}
const hash1 = new HashTable();
console.log(hash1);

hash1.hash("key1")

console.log(hash1.hash("key1"));

hash1.set('key1', 'val1')
hash1.set('key2', 'val2')
hash1.set('key3', 'val3')

console.log(hash1);

console.log(hash1.get('key1'));
console.log(hash1.get('key1'));
console.log(hash1.get('key1'));

console.log(hash1.hasKey('key1'));
console.log(hash1.hasKey('key2'));
console.log(hash1.hasKey('key4'));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
