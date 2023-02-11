//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palabraFrase = "salas";
const palabraAlreves = palabraFrase.split("").reverse().join("");

const compararPalimdromo = (frase, revesoFrase) => {(frase === revesoFrase) ? console.log("si es un palindromo") : console.log("no es un palindromo");};

//compararPalimdromo(palabraFrase,palabraAlreves);


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const a = "xyz1, xyz2, xyz3, xyz4 y xyz5";

const eliminarPatron = (frase, patron)=> console.log(frase.split(patron).join(""));

//eliminarPatron(a,"xyz");