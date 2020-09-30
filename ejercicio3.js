/*A partir de un valor de número entero, 
mostrar el valor absoluto. 
Por ejemplo si se introduce un -7 mostrar el mensaje 
"El valor absoluto de -7 es 7". 
Si es positivo o cero mostrar ese mismo valor.*/

let stringnum1 = parseInt(window.prompt('Introduce un numero entero'));

if (stringnum1) {
    console.log (`El valor absoluto de ${stringnum1} es ${Math.abs(stringnum1)}`);
}else {
    console.log (stringnum1 === 0 && stringnum1*1);
}

