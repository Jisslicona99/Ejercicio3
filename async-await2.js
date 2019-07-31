//Otro Ejemplo del uso de Async/Await
//Json
let empleados = [{
    id: 1,
    nombre: 'Nicolle'
},{
    id: 2,
    nombre: 'Rigo'
},{
    id: 3,
    nombre: 'Jose'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

//Crear funcion
let getEmpleado = async(id) =>{
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    //validar lo que me devuelve la funcion
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }1
}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    //validar lo que me devuelve la funcion
    if(!salarioDB){
        throw new Error(`No existe salario para el  empleado con el id ${empleado.nombre}`);
    } else {
        return{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }
}

let getInformacion = async(id) =>{
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(1)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err));