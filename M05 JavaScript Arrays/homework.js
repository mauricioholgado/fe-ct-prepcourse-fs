/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
return array [0];
}{
let saludos =["hola" ,"chau", "andapaya"]
console.log(devolverPrimerElemento(saludos))
}
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
      return array[array.length -1];}{
 
        let numeros = [10, 20, 30, 35]
   console.log(devolverUltimoElemento(numeros));
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
  return array.length;  
}let colores = ["azul","amarillo", "rojo", "verde","caca"]
{
console.log(obtenerLargoDelArray(colores));
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
return array.map (array => array+1);}
{
let numeros = [4, 5, 6, 8]; 
console.log(incrementarPorUno(numeros));
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push (elemento);
return array}
{
let saludos = ["hola", "chau", "no se"]

console.log(agregarItemAlFinalDelArray(saludos," todo"))
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

 array.unshift (elemento);
   
  {return  array}
}
 

const arr = ["b", "c", "d" ];
  

console.log(agregarItemAlComienzoDelArray(arr,"a"))
  

function dePalabrasAFrase(palabras){
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  return palabras.join (" ") 
}
 let hola = ["Hello", "world!"]
 console.log (dePalabrasAFrase(hola))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  
return array.includes (elemento); 
} 
{console.log(arrayContiene([1,2,3,4,5], 5))
}

function agregarNumeros(arrayOfNums){{ 
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
{   let suma = 0;
   for (let i = 0 ;i < arrayOfNums.length; i++ )
      suma +=arrayOfNums[i];
   return suma; 
}
  }  let numeros = [1,2,3,4,5,10]
let resultado = agregarNumeros(numeros)
console.log(resultado) 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
if (resultadosTest.length === 0)
return 0;

let suma = 0;

for( let i =0; i <  resultadosTest.length ; i++)
  suma  += resultadosTest[i];


   const promedio = suma / resultadosTest.length;

   return promedio}
  const arra = [10,20,30,40,50,60]

   const promedius =promedioResultadosTest(arra)

console.log(promedius)

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
{if (arrayOfNums.length===0)
return undefined
}
let masgrande = [0]

for (let i = 1; i< arrayOfNums.length ; i++)

if (arrayOfNums[i] > masgrande)  masgrande = arrayOfNums[i]

return masgrande
}
const numer = [ 1,2,3,14,5,6,7,8,9];
const grande = numeroMasGrande(numer)
console.log(grande)

function multiplicarArgumentos(){ 
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
{ if (arguments.length ===0)
   return 0;
}
let producto = 1;

for (let i = 0; i < arguments.length; i++) {
producto *= arguments[i]}

return producto;
}console.log(multiplicarArgumentos(2,2,2))



function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cuenta = 0;

for (i= 0 ; i < array.length; i++) {
if (array[i] > 18){
   cuenta++;
}
}
return cuenta }
const numero1 = [20,15,19,30,60,12,15,21]
const mayores18 = cuentoElementos(numero1)
console.log(mayores18)




function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
if (numeroDeDia === 1 || numeroDeDia === 7)

return "Es fin de semana";

else 
return "Es dia laboral"

}console.log(diaDeLaSemana(3));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let entero = num.toString()
   return entero[0]=== "9"
   

}console.log(empiezaConNueve(932))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
if (array.length <= 1)
 {return true}

let primerel =array[0];

for (i =1; i < array.length ; i++) {
if (array[i] !== primerel ){


return false;}
}
return true}

console.log(todosIguales([1,1,1,2]))


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
  
   let coincidencia =[];

  for (let i = 0 ; i < array.length ; i++) {
   if ( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
   coincidencia.push(array[i]);
   }
}
  if (coincidencia.length === 3){
  return coincidencia;
   
  }
else{ 
return "No se encontraron los meses pedidos"}
}
const meses = ["Abril","Mayo","Enero","Febrero","Marzo"];
const resultado2 = mesesDelAño(meses);
console.log(resultado2)

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   let resultadoseis =[]

   for ( i =0; i <11 ;i++ ){
   resultadoseis.push(i * 6)

return resultadoseis;}
     const talbla6 = (tablaDelSeis());
    } console.log(talbla6)

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayorescien = []
   for (i= 0; i<array.length ; i++){
      if (array[i]>100) {mayorescien.push(array[i])}
   }
      return mayorescien;
   }
   const enteros = [100,120,99,80,130]
   const result = mayorACien(enteros)
console.log(result)

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   let aumentando =[]
   
   for(let i=0; i < 10 ; i++) {
    num += 2;   
   aumentando.push(num);   
   
   if ( num === i) {
   return "Se interrumpió la ejecución";
     }
   }
return aumentando
}
const resultado =(breakStatement(3))

console.log(resultado)



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   let numerito =[ ]

   for (let i = 0; i < 10; i++) {
            
 if (i=== 5){
    continue;}
    num += 2
    numerito.push(num);
   } 
return numerito
 
}const numeross = [16,17,3,2,6,15]
const ress = (continueStatement(numeross))
console.log(ress)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
