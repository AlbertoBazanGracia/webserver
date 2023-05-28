const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req);
    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log ("Escuchando el puesto 8080")