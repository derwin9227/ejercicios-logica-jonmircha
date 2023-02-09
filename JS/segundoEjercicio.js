//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const text = prompt("ingresa una frase");

let countChar = prompt("Cuantos caracteres desea mantener en la cadena?");

while (countChar == null || /\D/.test(countChar || countChar  == "")) {
    countChar = prompt("Entre un número VÁLIDO: ");
}

function cutText(text, limited){
    const cuttedText = text.slice(0,limited);
    alert("el fragmento corta es -> " + cuttedText);
}

cutText(text, countChar);