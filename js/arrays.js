/* 1) Recorrer el siguiente array de strings y contabilizar la cantidad de veces que aparece el string 'hola'

const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola']

* Se debera decir por alerta al final, "la lista de palabras contiene 2 veces el string 'hola'" */



const palabras = ['pepe', 'buen dia', 'hola', 'soy juan', 'hola'];
let contador = 0;
let saludo = 'hola'

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === saludo) {
    contador++;
    }
}

alert("La lista de palabras contiene " + contador + " veces el string 'hola'");


console.log('=============================================================');
console.log('=============================================================');


/* 2) Recorrer el array de notas y sacar el promedio

const notas = [8, 9, 4]

* Se debera decir por alerta al final, "El promedio final es: {promedio}" */


const notas = [8, 9, 4];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

const promedio = suma / notas.length;

alert("El promedio final es: " + promedio);


console.log('=============================================================');
console.log('=============================================================');



/* 3) Recorrer el array de mensajes y contabilizar la cantidad de caracteres de todos los mensajes

const mensajes = ['hola a todos', 'buenas', 'me gusta JS']

* Si la cantidad total es menor a 20, se dira 'el usuario recien empieza'

* Si la cantidad total es entre 20 y 50, se dira 'el usuario es nuevo'

* Si la cantidad total es mayor a 50, se dria 'el usuario es recurrente' */


const mensajes = ['hola a todos', 'buenas', 'me gusta JS']
let caracteres = 0

for (let i = 0; i < mensajes.length; i++) {
    caracteres += mensajes[i].length;
}

if (caracteres < 20) {
    alert("El usuario recién empieza");
} else if (caracteres >= 20 && caracteres <= 50) {
    alert("El usuario es nuevo");
} else {
    alert("El usuario es recurrente");
}


//practicando Login

let nombre = prompt ('Ingrese su Nombre:')
let edad = prompt ('Ingrese su Edad:')

if (nombre == 'Juan' && edad == 20) {
    alert('Bienvenido Juan al Sistema.');
} else
    alert ('Bienvenido al Sistema');

