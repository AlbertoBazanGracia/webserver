const express = require('express')
var hbs = require('hbs');

require('dotenv').config();  // hemos instalado el paquete dotenv que permite incluir como variables de entorno las que metamos en el archivo .env

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials', function (err) {} );


// servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alberto Bazán',
        titulo: 'Curso de NODE'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alberto Bazán',
        titulo: 'Curso de NODE'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alberto Bazán',
        titulo: 'Curso de NODE'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, ()=>{
    console.log(`Web server escuchando en el puerto ${port}`);
})