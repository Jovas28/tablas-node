const { multiplicar } = require('./utils/multiplicar');
const argv = require('./config/yargs');
const color = require('colors');

// console.log(argv)

const { base } = argv;
const { l } = argv;
const { hasta } = argv;

multiplicar(base, hasta)
    .then(
        resp => {
            if(l) { console.log(`${resp.items}`.rainbow);}
            console.log(resp.success);
        }
    ).catch( err => console.log(err)); 


    // const [,,baseArg = 'base=5'] = process.argv;
// const base = baseArg.split('=')[1];
// console.log(base);