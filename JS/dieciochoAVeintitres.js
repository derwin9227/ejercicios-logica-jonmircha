//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const regExpVocales = /[aeiou]/i;
const regExpConsonantes = /[bcdfghjklmnpqrstvwxyz]/i;
const frase = {texto:"",vocales:[],consonantes:[]}
const dividirLetras = texto => {
    if (validarTexto(texto)){
        
        for (const letra of texto) {
            if(regExpVocales.test(letra))
                frase.vocales.push(letra);
            if(regExpConsonantes.test(letra))
                frase.consonantes.push(letra);
        }
        frase.texto=texto;
    }
    else
        console.log("cadena no valida");
};
const validarTexto = texto => (typeof texto === "string" && texto !== "");
/* dividirLetras(20);
dividirLetras([]);
dividirLetras("Hola Mundo");
console.log(`la frase → ${frase.texto} ← tiene ${frase.vocales.length} vocales y ${frase.consonantes.length} consonantes`); */


//19) Programa una función que valide que un texto
// sea un nombre válido, pe. miFuncion("Jonathan MirCha")
// devolverá verdadero.
const validarNombre = nombre => (typeof nombre === "string" && nombre !== "" && (/^[a-z\s]+$/ig.test(nombre)));

const evaluarNombre = nombre => validarNombre(nombre) ? console.log(`→ ${nombre} ← es un nombre valido`) : console.log(`→ ${nombre} ← no es un nombre valido`);

/* evaluarNombre("hola 5 veces");
evaluarNombre("derwin hernandez");
evaluarNombre("derwin");
evaluarNombre("hola mundo."); */

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = email => ((/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)));
console.log(validarEmail(""));
console.log(validarEmail(546));
console.log(validarEmail({}));
console.log(validarEmail([]));
console.log(validarEmail(true));
console.log(validarEmail(undefined));
console.log(validarEmail());
console.log(validarEmail("derw_-.5_64nh@gl.cv"));

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].



//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.