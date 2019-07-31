/*Ejemplo de como funciona Async */

//DEfinir una funcion que me devuelve un nombre

let getNombre = () => {
    return  new Promise ( ( resolve, reject) =>{
        setTimeout() => {

                resolve('Nicolle');
             
        },3000);
    });
};

let saludo = async() =>{
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
    return
})

.catch(e =>{
    console.log('Error de Async', e);
});
