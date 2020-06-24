// Array
// Declaración
var numeros = [1,2,3,4,5];
// mandar valores a consola
console.log(numeros);

//cadenas
var estudiantes = ["Enrique","Juan", "Abel"];
console.log(estudiantes);

console.log(estudiantes[0]);

//cantidad de elementos de un array
console.log(estudiantes.length);

//Invertir los elementos de un array
console.log(estudiantes.reverse());

//orden de un array
console.log(estudiantes.sort());

//Adicionar elementos a un array
console.log(estudiantes.push("Luis"));

console.log(estudiantes);

//eliminar primer elemento
console.log(estudiantes.shift());

//eliminar último elemento
console.log(estudiantes.pop());

console.log(estudiantes);

//Posición de un elemento
console.log(estudiantes.indexOf("Enrique"));

//Añadir elementos al inicio del array
console.log(estudiantes.unshift("Ramon"));
console.log(estudiantes);

// Combinación de Arrays
var grupo_a = [1,2,3];
var grupo_b = [4,5,6];
console.log(grupo_a.concat(grupo_b));

