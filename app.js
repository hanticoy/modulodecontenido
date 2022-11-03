// servidor HTTP
const { Console } = require('console');
const http = require('http');
// el archivo de abajo es el archivo que necesitas crear en esta asignación.
// ¡NOTA! El "." en la ruta del archivo de abajo se refiere a la ubicación del archivo actual, en este caso
// el archivo es app.js. Además, la ruta "./static.js" se refiere a un archivo llamado static.js
const my_static_contents = require('./static');

//crea un servidor
server = http.createServer(function (request, response){
    my_static_contents.contents(request, response);  //eso servirá todos los archivos estáticos automáticamente
});
server.listen(8000);
console.log("Running in localhost at port 8000");

