/*El usuario tiene dos hijos. 
Pregúntale la edad del mayor y 
los años de diferencia entre el mayor y el menor.
 Muestra en pantalla si el menor es mayor de edad o no.*/


let hijo1 = parseInt(window.prompt('¿Cuantos años tiene el mayo?'));
let hijo2 = parseInt(window.prompt('dime los años de diferencia entre el mayor y el menor'));

if (hijo1-hijo2 > 18 ) {
    window.alert ('Es mayor de edad ');
}
else {
    window.alert ('Es menor de edad');
}