console.log("Ejercicios Destructuring")

const respuesta = (num) => {
    return "Respuesta a EJERCICIO: " + num 
}


/////////////////////////////////////////////////////////// //////////////////////////////////////
// Ejercicio 1
// Crear una función (arrow function) llamada mostrarInfo
// mostrarInfo recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
// Tenés que usar destructuring dentro de la función.

const personaEj1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };


const mostrarInfo = (objeto) => {
    const {nombre, apellido} = personaEj1
    return (`Tu nombre completo es ${nombre} ${apellido}`)
}

console.log(respuesta(1), mostrarInfo(personaEj1))



/////////////////////////////////////////////////////////// //////////////////////////////////////
// Ejercicio 2
// Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
// bulb Pista: vamos a tener que crear una variable para cada nombre
const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

// const nombres = [];

// console.log( nombres );
// // [ 'Ada', 'Grace', 'Hedy' ]


const {nombre:nombre1} = persona1
const {nombre:nombre2} = persona2
const {nombre:nombre3} = persona3

const nombres = [nombre1,nombre2,nombre3]
console.log(respuesta(2), nombres)



/////////////////////////////////////////////////////////// //////////////////////////////////////
// Ejercicio 3
// Tenemos un array datosPersonales, con el nombre, apellido, día nacimiento, mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
// Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.
const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

// utilizando destructuring
// extraer las variables nombre, lugar, dia, mes, anio

// console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.
const [nombreEj3,apellidoEj3, diaEj3, mesEj3, anioEj3, lugarEj3] = datosPersonales 

console.log(respuesta(3),`${nombreEj3} nació en ${lugarEj3}, el ${diaEj3}/${mesEj3}/${anioEj3}.` )



/////////////////////////////////////////////////////////// //////////////////////////////////////
// Ejercicio 4
// Tenemos un objeto persona, con sus datos personales
// Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.
const personaEj4 = {
 nombre: 'Ada',
 apellido: 'Lovelace',
 fechaNacimiento: [10, 12, 1815],
 lugarNacimiento: {
   pais: 'Inglaterra',
   ciudad: 'Londres'
 }
};

const {nombre:nombreEj4, lugarNacimiento, fechaNacimiento} = personaEj4

console.log(respuesta(4), `${nombreEj4} nació en ${lugarNacimiento.ciudad}, el ${fechaNacimiento.join("/")}.`);
// Ada nació en Londres, el 10/12/1815.



/////////////////////////////////////////////////////////// //////////////////////////////////////
// Ejercicio 5
// Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.
const personaEj5 = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

// usando destructuring, obtener las variables idioma y nombrePersona

// console.log(`${nombrePersona} habla en ${idioma}.`);
// Ada Lovelace habla en inglés.
const [nombreEj5,array] = personaEj5
const {idioma} = array[0]
console.log(array)
console.log(respuesta(5), `${nombreEj5} habla en ${idioma}` )


// Ejercicio 6
// Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.
const persona1Ej6 = {
 nombre: 'Ada Lovelace',
 techs: ['JavaScript', 'C++']
};

const persona2Ej6 = {
 nombre: 'Grace Hopper',
 techs: ['JS']
};

const {nombre:nombrePersona1Ej6, techs:techsPersona1Ej6 } = persona1Ej6;
const {nombre:nombrePersona2Ej6, techs:techsPersona2Ej6} = persona2Ej6;
const [techPersona1Ej6] = techsPersona1Ej6
const [techPersona2Ej6] = techsPersona2Ej6  

console.log(`${nombrePersona1Ej6} programa en ${techPersona1Ej6}.`);
console.log(`${nombrePersona2Ej6} programa en ${techPersona2Ej6}.`);

// Ada Lovelace programa en JavaScript.
// Grace Hopper programa en JS.

// Ejercicio 7
// ¿Cómo podríamos mejorar la siguiente función utilizando destructuring?
// La función de la solución tiene que ser también una arrow function de una sola línea
const calcularArea = (triangulo) => {
 const ladoA = triangulo.a;
 const ladoB = triangulo.b;
 const ladoC = triangulo.c;

 return ladoA + ladoB + ladoC;
}

const calcularArea2 = (triangulo) => {
    // const {a:ladoA, b:ladoB, c:ladoC} = triangulo
    // return ladoA + ladoB + ladoC;
    
    // return (triangulo.a + triangulo.b + triangulo.c)
    const {a , b , c} = triangulo
    return a + b + c 
}



// ejemplos de uso
const triangulo1 = { a: 3, b: 5, c: 7 };
const triangulo2 = { a: 8, b: 2, c: 3 };

console.log( calcularArea2(triangulo1) ); // 15
console.log( calcularArea2(triangulo2) ); // 13


// Ejercicio 8
// Crear una función (arrow function) llamada mostrarPrimerDisco que recibe un objeto y retorna la cadena "El primer disco de BANDA es PRIMERDISCO"
// Tenés que usar destructuring dentro de la función, y tiene que tener el return implícito
const banda = {
 nombre: 'Nirvana',
 discos: [
   { nombre: 'Bleach' },
   { nombre: 'Nevermind' },
   { nombre: 'Incesticide' }
 ]
};

// crear la funcion mostrarPrimerDisco
const mostrarPrimerDisco = (objeto) => {

}

// console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach

// const promedio = (array) => {
//     const paso1 = array.reduce((acc,element)=> {
//       return (acc + element)
//     },0)
//     return paso1/array.length
//   }

//   console.log( promedio([4, 7, 8, 5, 10]))


  const sumaDeLosDoblesPositivos = (array) => {
    const arraySinNegativos = array.filter(element=> {
      return element > 0
    })
    console.log(arraySinNegativos)
    const doblesPositivos = arraySinNegativos.map((numero)=> {
      numero*2
    })
    console.log(doblesPositivos)
    return doblesPositivos.reduce((acc,element)=> {
      return acc + element
    },0)
  } 
  
  
  console.log(sumaDeLosDoblesPositivos([2, -4, 6, 0, 5, -1]))