/************
 * VARIABLES
 * var, let y const
 */

 // Var: es variable puede ser utiliza en cualquier momento
 console.log(uno);
 var uno = "variable";
 console.log(uno);

 if(true){
     var x = "verdadero";
 }
 console.log(x);

 // let- es variable, definición de bloque

if(true){
    let y = "verdadero";
}
//console.log(y);

let dos = "variable";
console.log(dos);

var var1 = "x";
var var1 = "y";

let let1 = 1;
//let let1 = 2;


let var2 = 1;
if(true){
    let var2 = 2;
    console.log(var2);
}
console.log(var2);

const tres = "igual";

// VALORES VERDADEROS Y FALSO

// falso: undefined, null, 0, ''
// verdadero: si tiene un valor diferentes a falsos

let mes;
mes = "abc";

if(mes){
    document.getElementById("texto").innerHTML = "Valor verdadero";
} else {
    document.getElementById("texto").innerHTML = "Valor falso";
}

// OPERADORES DE IGUAL

// Doble igual - Devuelve verdadero si los operandos son iguales.
// "3" == 3

// triple === - Devuelve verdadero si son iguales y son el mismo tipo

mes = "3";
mes != 3 ? console.log("verdadero") : console.log("Falso");

// Template de string

let nombre = "Juan";
let apellido = "Lopez";
const nacimiento = 1990;
function calcularEdad(nac){
    return 2020 - nac;

}

console.log(nombre + " " + apellido + ", su edad es:" + calcularEdad(nacimiento));

console.log(`${nombre} ${apellido}, su edad es ${calcularEdad(nacimiento)}`);

// FUNCIONES DE FLECHA
// Funciones más dinamicas, menos codigo

const anios = [2000, 2005, 2010, 2020];

// map: crear un nuevo arreglo con los resultados realizados en una función.
var edad = anios.map(function(el) {
    return 2020 - el;
});
console.log(edad);

let edadNueva = anios.map(el => 2020 - el);
console.log(edadNueva);

edadNueva = anios.map((el, index) => `Edad ${index + 1}: ${2020 - el}`);
console.log(edadNueva);

edadNueva = anios.map(
    (el, index) => {
        const actual = new Date().getFullYear();
        const edad = actual - el;
        return `Edad ${index + 1}: ${2020 - el}`;
    }
);
console.log(edadNueva);

const cuadrado = function (num) {
    return num * num;
}
console.log(cuadrado(2));

const cuadrado2 = (num) => {
    return num * num;
}
console.log(cuadrado2(2));

const cuadrado3 = (num) => num * num;
console.log(cuadrado3(2));

const frutas = [
    {
        nombre: "Manzana",
        cantidad: 2
    },
    {
        nombre: "Fresa",
        cantidad: 4
    },
    {
        nombre: "Mora azul",
        cantidad: 8
    },
    {
        nombre: "Uva",
        cantidad: 3
    }
];

const menores10 = frutas.filter(fruta => fruta.cantidad < 5 && fruta.nombre.startsWith("M"));
console.log(menores10);