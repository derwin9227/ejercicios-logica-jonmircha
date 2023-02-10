//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function splitcharaters(text, separator = " "){
    const splittedText = text.split(separator);
    return splittedText;
}

const phrase = prompt("Ingrese una frase");
const separator = prompt("Cual caracter sera el que marque la division de palabras?");

console.log(splitcharaters(phrase, separator));
