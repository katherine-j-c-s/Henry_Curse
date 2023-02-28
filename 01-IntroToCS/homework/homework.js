'use strict';

function BinarioADecimal(num) {
   
   let numerosBinarios = num.split("") ;
   let bi = 2;
   let posicion = numerosBinarios.length - 1;
   let numeros = [];

   for (let n = 0; n < numerosBinarios.length; n++) {
      if (numerosBinarios[n] == 1) {
         let elevado = bi ** posicion; 
         numeros.push(elevado);
      }
      posicion --;
   }

   let suma = 0 ;

   for (let n = 0; n < numeros.length; n++) {
      suma = suma + numeros[n];
   }

   let numeroDecimal = suma;

   return numeroDecimal;
}
function DecimalABinario(num) {
   let numero = num;
   let numBinario = numero.toString(2);

   return numBinario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
