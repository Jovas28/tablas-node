const { option } = require('yargs');

const argv = require('yargs')
    .options('b', {
        alias : 'base',
        type : 'number',
        demandOption: true, //pide a fuerzas un valo en los parametros
        describe : 'Es la base de multiplicar',
    })
    .option('l', {
        alias : 'listar',
        type : 'boolean',
        demandOption : true,
        default : false,
        describe : 'Imprime la tabla si es que se solicita'
    })
    .options('h',{
        alias : 'hasta', 
        type : 'number',
        demandOption : true, 
        default : 10,
        describe : 'Limite de la tabla si no de especifica es 10'
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)) throw 'ERROR! La base debe ser un número';
        if(isNaN(argv.h)) throw 'ERROR! El limite debe ser un número';

        return true;
    } )
    .argv;

module.exports = argv;