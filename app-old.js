//requires
const http = require('http');

http.createServer((req, res) => {

    //res.write('Hello world');
    //res.end();//debemos indicar que finalizamos la respuesta

    //También podemos retornar un json
    res.writeHead(200,{'Content-Type':'application/json'});
    let salida = {
        nombre : 'Henry',
        edad : 37 ,
        url : req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);
console.log('Escuchando por el puerto 8080');
