/**
 * 
 */

const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente una tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', descripcion, completado)
    .command('borrar', 'Borra una tarea', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}