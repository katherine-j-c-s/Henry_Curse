//////////////////SCOPE & HOSTING/////////////////////

//Determiná que será impreso en la consola, sin ejecutar el código.
//INDICAR CUAL ES EL VALOR QUE DEVUELVE

//actividad 1

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);//10
   console.log(a);//5......... 8 (correct)
   var f = function (a, b, c) {
      b = a;
      console.log(b);//b......... 8 (correct)
      b = c;
      var x = 5;//ya hya un x declarado
   };
   f(a, b, c);
   console.log(b);//c.......... 9 (correct)
};
c(8, 9, 10);//
console.log(b);//10
console.log(x);//undefided........ 1 (correct)

//actividad 2

console.log(bar);// 1 ..........undefined (correct)
// console.log(baz);// 2
foo();
function foo() {
   console.log('Hola!'); // "hola"
}
var bar = 1;
baz = 2;

//actividad 3

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // "Tony" .........Franco (correct)

//actividad 4

var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Franco ........ Tony (correct)

//actividad 5 

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Reverse Flash.............Franco (correct)

//aunque LET cambia su  valor en la local,
// su valor global NO cambiará

//si Var cambia de valor en un local,
//tambien cambia en su global


/////////////////////COERCION DE DATOS/////////////////
//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

let ejm1 = 6 / "3" //2
let ejm2 = "2" * "3" //"6"
let ejm3 = 4 + 5 + "px" //"9px"
// se sumaron los numeros y luego lo acopilan al string
// por el orden en el que se pusieron 

let ejm4 = "$" + 4 + 5 //"$9" ........... $45 (correct)
//le acopilaron al string ambos numeros
//por el orden en el que se pusieron

let ejm5 = "4" - 2 //"2"
let ejm6 = "4px" - 2 //"2px".......... NaN (correct)
//solo se puede resolver si tienen UNICAMENTE numeros

let ejm7 = 7 / 0 //1 ............. infinity (correct)
let ejm8 = {}[0] //{[0]} ...............undefined (correct)
let ejm9 = parseInt("09") //09 .............9 (correct)
let ejm10 = 5 && 2 //false....................2 (correct)
let ejm11 = 2 && 5 //false................5 (correct)
let ejm12 = 5 || 0 //true.................5 (correct)
let ejm13 = 0 || 5 //true.................5 (correct)
let ejm14 = [3]+[3]-[10] //[3,3,-10]...........23 (correct)
let ejm15 = 3>2>1 //true..................false (correct)
let ejm16 = [] == ![] //false..............true(correct)

let todosLosEjem = [ejm1,ejm2,ejm3,ejm4,ejm5,ejm6,ejm7,ejm8,ejm9,ejm10,ejm11,ejm12,ejm13,ejm14,ejm15,ejm16]

for (let e = 0; e < todosLosEjem.length; e++) {
    console.log(todosLosEjem[e])
    
}

/////////HOISTING///////////////

//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//activida 1

function test() {
    console.log(a);// 1 ............undefined (correct)
    console.log(foo());// 2
 
    var a = 1;
    function foo() {
       return 2;
    }
}
 
test();

//actividad 2

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false));//Meow Mix..........undefined (correct)


////////////////THIS///////////////////

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; // Aurelio De Rosa
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); //Aurelio De Rosa............undefined (correct)
//sale undefined porque no es una funcion.

///////////////// EVENT LOOP ///////////////////////

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
    console.log(1); // 1
    setTimeout(function () {
       console.log(2); // 2
    }, 1000);
    setTimeout(function () {
       console.log(3); // 3
    }, 0);
    console.log(4); //4
 }
 
printing();