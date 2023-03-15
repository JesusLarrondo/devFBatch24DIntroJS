//1. declarar una variable, solo una vez
var a;

//2. se puede asignar un valor despues
a = 2;

//3. reasignarle un valor a la variable
a = 8;

//4. se declara e inicializa una variable
var b = 5;

//.5 redeclarar una variable
var c = 8;
var c = 10;

var suma = b + a;
console.log(suma);

var persona1= {
    id: 123,
    nombre: "Luis",
    edad: 25,
    casado: false,
    email: "luis.felipe@correo.com",
    num_galletas: 15,
    primer_
}

var persona2= {
    id: 123,
    nombre: "José",
    edad: 31,
    casado: true,
    email: "jose@correo.com",
    num_galletas: 30,
}

//como consultar la información de mis objetos literales
//consulta por notación de punto
console.log("por punto -> Hola, mi nombre es " + persona1.nombre + " tengo " + persona1.edad + " años ")
//consulta por notación de llaves cuadradas
console.log("por llaves -> Hola, mi nombre es " + persona1["nombre"] +
" " + persona1["primer apellido"] + " tengo " + persona1["edad"] + " años " + persona1.direccion)

//in me ayuda a verificar si una clave esta en mi objeto literal
console.log("direccion" in persona1)//false
console.log("nombre" in persona1)//true

var nombreEnPersona = "direccion" in persona1
console.log(nombreEnPersona)//puedo almacenar el resultado

console.log(Object.keys(persona1))