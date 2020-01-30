var moment = require('moment');
var http = require('http');

var fs = require('fs')


var server = http.createServer(function(request, response){
    // // console.log(request);
    // console.log(request.headers);
    // console.log(request.method);
    // console.log(request.url);
    // // response.writeHead(200);
    // // response.end('hello wolrd!');
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write('<h1> Super Application </h1>');
    // response.write('<p> Hop une autre ligne</p>');
    // response.end('<p> Hello World! </p>'); // ok c'est terminer on envoie la reponse au client
    
    
    var pagepath = 'index.html';

    if (req.url == '/contact'){
        pagepath = 'contact.html';
    }
    fs.readFile(pagepath, function(err, data){
         if(err) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('Oopsune erreur est survenue');
        }response.end(data);
    });
});




var host = "http://localhost";
var port = 3000;

server.listen(3000, function(){
    console.log("le serveur a bien demarre à l'adresse : " + host + ":" + port);
} );