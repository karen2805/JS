// String -- Cadena-- cualquier cosa dentro de comillas
const name = "Miranda";
const edad = "24";
const space = " ";

//Number - cualquier numero
const favNum = 15;
const favNum1 = 15.9;

//Boolean - 2 opciones (true o false)
const iLoveCodind = true;
const iLoveCodind1 = false;

//Undefined
let casa; //no le agrego un valor, asi que es indefinido
console.log(casa)

//Null-nulo
const hoja = null;


//********************************************* */
//CHALLENGES

//1. String Concatenation
// Voy a crear tres variables constantes y les voy a asignar unas palabras a cada una
const first="Welcome";
const second="to the";
const third="Jungle";
//Hacer un console.log concatenando estas variables

const welcome = first + second + third;

console.log(welcome);

//*****************TIPOS DE DATOS COMPUESTOS************************* */
//Nos permiten guardar en variables colecciones de datos asociados o no

//Object

const persona = {
    //NOMBRES----VALOR//KEY VALUE PAIRS
    //KEY---VALUE
    //strings
    nombre: "Miranja Jaramillo Morales",
    nacimiento: "15/07/1999",
    colorOjos: "cafes",
    //Number
    edad: 24,
    //Boolean
    estudia: true,
}

console.log(persona);

// ¿CÓMO ACCEDEMOS A LOS VALORES DEL OBJETO?
// QUIERO ACCEDER AL NOMBRE DE LA PERSONA
console.log("Mi nombre es " + persona.nombre);
console.log("Mi nacimiento es " + persona.nacimiento);

console.log(persona.edad);

// ARRAY 
//              index 0 ,   index 1,   index 2,  index 3
const frutas = [ "banana", "manzana", "melón", "pera"];
const vacio = [ ];
const fruta = [ "tomate"];
//TIPOS DE DATOS DENTRO DE MI ARRAY
const miArray = [ 21, "ramen", true, undefined, false];
const miArray2 = [ 15, "manzana", [1, 2, 3, true, "banana"],{uno:1}];

console.log(frutas[3]);
console.log(frutas[1]);

const fruta1 = "sandía";
//          ACCEDO A EL NOMBRE DE LA VARIABLE fruta1 Y CON [] ESTOY ACCEDIENDO AL ÍNDICE EN ESPECÍFICO
console.log(fruta1[0]);

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
// Método push (función )
vacio.push("holis");

console.log(vacio);





//OBJETOS VACIOS TAMBIEN SON OBJETOS
const empty = {};


