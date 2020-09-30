/*Escribe un programa el cual analizará si la contraseña 
introducida es correcta o no. 
Para que la contraseña sea correcta deberá cumplir estas directivas:
Debe tener 8 caracteres como mínimo.*/


let contraseña1 = window.prompt('Introduzca una cotraseña');
let contraseña2 = contraseña1.substring(0,8);
 

if (contraseña1 === 'aelita2') {

    window.alert ('correcto')

}else if (contraseña2)
{
    window.alert (`error, la contraseña debe tener 8 caracteres como mínimo `)
};