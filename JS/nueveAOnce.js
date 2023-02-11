//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
let x;
const numeroAleatorio = () => {
    do{
        x = Math.random()*1000;
        //console.log("el numero aleatorio es "+ x);
    }while(x<=500 || x>600);
    return Math.trunc(x);
}

//console.log("resultado final -> "+ numeroAleatorio());




//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numero = 212;
const compararCapicua = (numero) => (numero == numero.toString().split("").reverse().join("")) ? true : false;

//console.log(compararCapicua(numero));



//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
let factorial = 5,resultado;
const numeroFactorial=(factorial)=>{
    for(let i=factorial; i>=1;i--){
        
        i===factorial ? resultado=i : resultado *= i;
    }
    return resultado;
}
//console.log("resultado final: " + ((numeroFactorial(factorial)!=undefined) ? numeroFactorial(factorial) : "no se puede calcular"));