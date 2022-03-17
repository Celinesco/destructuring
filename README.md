
## Ejercicios del bootcamp [ADA ITW](https://adaitw.org/)

# Destructuring
- Ejercicio 1
    -Crear una función (arrow function) llamada mostrarInfo
    -mostrarInfo recibe un objeto y retorna la cadena “Tu nombre completo es ” concatenado con el valor de la propiedad nombre, un espacio y el valor de la propiedad apellido
    -Tenés que usar destructuring dentro de la función.

```
const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

const mostrarInfo = obj =>; // ACA LA SOLUCION

console.log( mostrarInfo(persona) );
// Tu nombre completo es Ada Lovelace
```

- Ejercicio 2
    - Utilizando destructuring, debemos extraer la propiedad nombre de cada objeto y crear un array en la variable nombres con los 3 nombres que obtuvimos de cada persona.
:bulb: Pista: vamos a tener que crear una variable para cada nombre

```
const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

const nombres = [];

console.log( nombres );
// [ 'Ada', 'Grace', 'Hedy' ]

```

- Ejercicio 3
    - Tenemos un array datosPersonales, con el nombre, apellido, día nacimiento, mes nacimiento, año nacimiento, lugar nacimiento (respetando el orden) de una persona
    - Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

```
const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

// utilizando destructuring
// extraer las variables nombre, lugar, dia, mes, anio

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.
```

- Ejercicio 4
    - Tenemos un objeto persona, con sus datos personales
    - Utilizando destructuring, obtener los datos necesarios para completar el siguiente código.

```
const persona = {
 nombre: 'Ada',
 apellido: 'Lovelace',
 fechaNacimiento: [10, 12, 1815],
 lugarNacimiento: {
   pais: 'Inglaterra',
   ciudad: 'Londres'
 }
};

console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.
```

- Ejercicio 5
    - Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

```
const persona = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

// usando destructuring, obtener las variables idioma y nombrePersona

console.log(`${nombrePersona} habla en ${idioma}.`);
// Ada Lovelace habla en inglés.
```

- Ejercicio 6
    - Utilizando destructuring, tenemos que extraer la información necesaria para completar el siguiente código.

```
const persona1 = {
 nombre: 'Ada Lovelace',
 techs: ['JavaScript', 'C++']
};

const persona2 = {
 nombre: 'Grace Hopper',
 techs: []
};

console.log(`${nombrePersona1} programa en ${techPersona1}.`);
console.log(`${nombrePersona2} programa en ${techPersona2}.`);

// Ada Lovelace programa en JavaScript.
// Grace Hopper programa en JS.

```


- Ejercicio 7
    - ¿Cómo podríamos mejorar la siguiente función utilizando destructuring?
    - La función de la solución tiene que ser también una arrow function de una sola línea

```
const calcularArea = (triangulo) => {
 const ladoA = triangulo.a;
 const ladoB = triangulo.b;
 const ladoC = triangulo.c;

 return ladoA + ladoB + ladoC;
}

// ejemplos de uso
const triangulo1 = { a: 3, b: 5, c: 7 };
const triangulo2 = { a: 8, b: 2, c: 3 };

console.log( calcularArea(triangulo1) ); // 15
console.log( calcularArea(triangulo2) ); // 13
```

- Ejercicio 8
    - Crear una función (arrow function) llamada mostrarPrimerDisco que recibe un objeto y retorna la cadena "El primer disco de BANDA es PRIMERDISCO"
    - Tenés que usar destructuring dentro de la función, y tiene que tener el return implícito

```
const banda = {
 nombre: 'Nirvana',
 discos: [
   { nombre: 'Bleach' },
   { nombre: 'Nevermind' },
   { nombre: 'Incesticide' }
 ]
};

// crear la funcion mostrarPrimerDisco

console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach

```

- Ejercicio 9
    - Crear una una arrow function llamada estaVacio que recibe un array y retornar true si no tiene ningún elemento, o false si tiene algún elemento
    - Es necesario utilizar destructuring y no hacer uso de la propiedad length de los arrays.

```
const estaVacio = ; // aca la solucion

estaVacio([])
 //=> true

estaVacio([0])
 //=> false

estaVacio([[]])
 //=> false
```

:bulb: Pista: cuando intento hacer destructuring sobre elementos que no existen, obtengo undefined



