//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const palabras = "hola mundo adios mundo".split(" ");
let count=0;
console.log(palabras);

for(let i =0; i<palabras.length; i++)
{
    ("mundo" === palabras[i]) ? count ++ : " no es igual";    
}

(count > 1) ? console.log("mundo se repite " + count + " veces") : "mundo no se repite";