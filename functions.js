// function - palabra reservada de JS y nos indica que es una función
//  FUNCIÓN - BLOQUE DE CÓDIGO
// saluda (nombre de mi función)
function saluda(){
// RETURN ES EL PEDAZO DE LÓGICA QUE REGRESA LA FUNCIÓN
    return "hola";
}

// LLAMAR O INVOCAR LA FUNCIÓN -> CALL THE FUNCTION, INVOKE THE FUNCTION
console.log(saluda());


// PARÁMETROS DE UNA FUNCIÓN
function suma (numero1, numero2){
    return numero1 + numero2;
}
// ARGUMENTOS
console.log(suma(5,100000));
console.log(suma(1004,435));
console.log(suma(4332,546));

//FUNCIONES QUE RECIBEN DATOS Y QUE NO RECIBEN DATOS
//addTwo --> Crear una funcion addTwo que acepta un numero y regresa el numero + 2

function addTwo(number){
    //Guardar mi resultado del numero +2 en una variable
    const result = number + 2;
    //Regresar esa variable con el resultado final
    return result;
}
//LLAMAMOS LA FUNCION  --> ejecutar la funcion, sino solo estas guardando esa logica
//addTwo()
console.log(addTwo(7))
console.log(addTwo(678))
console.log(addTwo(9.5))
