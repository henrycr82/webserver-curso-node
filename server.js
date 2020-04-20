//requires
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//Como haremos el deployment en Heroku establecemos la variable de entorno PORT para indicarle al servidor web 
//en qué puerto escuchar y si no hay nada allí escuchamos por el puerto 3000
const port = process.env.PORT || 3000;

// __dirname en un script de node devuelve la ruta de la carpeta donde reside el archivo JavaScript actual.
//middleware que me muestra en el navegador la página que tengo en la carpeta /public
app.use(express.static( __dirname + '/public' ));

//Cargamos todos los partials desde un directorio específico
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Express HBS Engine. Configuramos hbs como motor de visualización predeterminado de la aplicación.
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //renderizamos el archivo views/home.hbs
  res.render('home',{
      //enviamos parametros a la vista views/home.hbs
      titulo : 'Home',
      //enviamos el nombre en minúscula y luego convertimos  la primera letra de cada palabra en mayúscula
      //con el helper capitalizar
      nombre : 'henry castro',
      titulo_principal : 'curso de node js',
      contenido : 'Este curso de Nodejs, es una introducción practica para Desarrolladores Web, que tienen como objetivo crear aplicaciones Backend, utilizando el lenguaje que ya conocen: Javascript.'
      //anio : new Date().getFullYear()
  });
})

app.get('/about', (req, res) => {
  //renderizamos el archivo views/home.hbs
  res.render('about',{
      //enviamos parametros a la vista views/home.hbs
      titulo : 'About',
      titulo_principal : 'Node JS',
      nombre : 'henry castro',
      contenido : 'Es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.'
      //anio : new Date().getFullYear()
  });
})


/*/
app.get('/', (req, res) => {
  let salida = {
      nombre : 'Henry',
      edad : 37 ,
      url : req.url
  }
  res.send(salida);
})

app.get('/data', (req, res) => {
  res.send('Hello data');
})

app.listen(3000);
*/

//la función listen también puede recibir un callback
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});
