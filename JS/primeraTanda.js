//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const text = prompt("ingresa una frase para contar los caracteres");

function cadenaTexto (cadena){
    if(typeof cadena === "string" && cadena.length > 0)
    {
        const countChar = cadena.length;
        alert("la frase ingresada tiene "+countChar+" caracteres");
    }
    else{
        alert("Por favor ingresa una cadena de texto valida");
    }
}

cadenaTexto(text);

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".



//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


