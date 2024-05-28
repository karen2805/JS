//Esto es un comentario de una linea

/*comentario de
varias 
lineas */

console.log();
//CONSOLE.LOG es una funcion para "imprimir" o "ver" cualquier variable o data
console.log("Hello World!");

/* VARIABLES Y CONSTANTES - variables son contenedores
VAR - LET - CONST 
Para variables que se pueden cambiar mas adelante, usamos VAR o LET
Para variables constantes, usamos CONST
*/

/* LET Y CONST */
/*keyword (let OR const) name = value 
Estoy creando esta variable llamada fridge y inicializandola con el valor "empty" */
let refri = "vacio";
console.log(refri);   
/*Para cambiar el valor de la constante solo usamos su nombre */
refri="lleno";
console.log(refri);

var casa="sucia";
console.log(casa);
casa="limpia";
console.log(casa);

/*CONST */
const mascota="gato";
console.log(mascota);
// mascota="pez";
// console.log(mascota);

//NOMBRANDO VARIABLES
// 1. Nombres se distinguen entre mayúsculas y minúsculas
let a = "hola";
let A = "adiós";
console.log(a);
console.log(A);
// 2. Nombres deben comenzar con un carácter en minúscula
// 3. Nombres no pueden comenzar con números
// 4. Nombres no pueden contener símbolos
// 5. Nombres en camelCased son las mejores prácticas

// VÁLIDAS
let user;
let estudiante3;
let favoriteCandy;
let favFood;
let camelCasedVariable;

// NO VÁLIDAS
/* let 3estudiante ;
let fav-candy ; */
/* let camelCasedVariable; */
console.log(favFood);

/* CHALLENGE VARIABLES */

let firstName = "Jenny";
/* CONCATENACIÓN */
console.log( "Hello"+ " "+ firstName);
let lastName = "González";
console.log("Hello " + firstName +" " + lastName);
console.log("Hello this is my Mother's something");
