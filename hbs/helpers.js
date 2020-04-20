//requires
const hbs = require('hbs');

//Helper. Envío el año usando un helper
hbs.registerHelper('get_anio', () => { return new Date().getFullYear() } );

//Helper para convertir la primera letra de una palabra en Mayuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra,index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
} );
