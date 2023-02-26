//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const validarPrimo = (valor) => {
    let primo = false;
    if(typeof valor !== "number")
        {return console.log(`el valor →${valor}← ingresado no es un numero`);}
    if(valor<=1)
        {return console.log(`no se puede ingresar un numero menor a 1`);}
    for(let i=2;i<valor;i++){
        if((valor % i)===0)
            primo=true;
    }
    if(!primo)
        console.log(`el numero ${valor} es primo`);
};
/* validarPrimo(1);
validarPrimo(2);
validarPrimo(5);
validarPrimo(-1);
validarPrimo(7);
validarPrimo(10);
validarPrimo("hola");
validarPrimo(null);
validarPrimo(undefined);
validarPrimo({});
validarPrimo([]); */


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = valor => { 
    if(typeof valor !== "number")
        {return console.log(`el valor →${valor}← ingresado no es un numero`);}
    if(valor===0)
        {return console.log(`no se puede ingresar el numero 0`);}
    if((Math.abs(valor) % 2)===0)
        console.log(`el numero ${valor} es par`);
    else
    console.log(`el numero ${valor} es impar`);
};
/* parImpar(-1);
parImpar(1);
parImpar(2);
parImpar(16);
parImpar("fd"); */

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirFahrenheit = grados => {
    if(validarNumero(grados)){
        let calculo = (grados*(9/5))+32;
        return console.log(`${grados} grados celsius son ${calculo} grados fahrenheit`);
    }else
        return console.log("el valor ingresado no es un numero");
};
const convertirCelsius = grados => {
    if(validarNumero(grados)){
        let calculo = (grados - 32) * 5/9;
        return console.log(`${grados} grados fahrenheit son ${calculo} grados celsius`);
    }else
        return console.log("el valor ingresado no es un numero");
};
const validarNumero = valor => typeof valor === "number" ? true : false;

convertirFahrenheit("sdf");
convertirFahrenheit(0);
convertirCelsius("ds");
convertirCelsius(0);
convertirCelsius(32);

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).