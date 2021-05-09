const fs = require('fs');

const multiplicar = async (base, hasta) => {
    
    try {
        let items = '';
        items+=`
===============================
        Tabla del ${base}
===============================
`;
        for(let i=1; i<=hasta; i++) items += `${base} x ${i} = ${i*base}\n`;

        fs.writeFileSync(`tablas/tabla del ${base}.txt`, items);

        success = `El archivo tabla del ${base} se creo correctamente!`;
        
        return {success, items};
    } catch (error) {
        throw `ERROR! ${error}`;
    }
} 


module.exports = {
    multiplicar
}