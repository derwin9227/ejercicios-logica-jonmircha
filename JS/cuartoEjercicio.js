//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let repeatCount;
do{
    repeatCount = prompt("Cuantas veces desea repetir una frase");
}while(repeatCount<=0 || isNaN(repeatCount));

const textToRepeat = prompt("Cual es la frase que quiere repetir");


function repeat(text, count){
    for (let i = 0; i<count; i++){
        console.log((i+1)+" "+text);
    }
}

repeat(textToRepeat, repeatCount);