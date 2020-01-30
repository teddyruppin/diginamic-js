var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index.ejs');
});

// app.get('/contact', function(req, res){
//     res.writeHead(200, {'Content-type': 'text-html'});
//     res.end("Contactez nous");
// });

app.get('/contact', function(req, res){
    res.render('contact.ejs');
});

// app.get('/hello/:firstname', function(req, res){
//     res.writeHead(200, {'Content-type': 'text-html'});
//     res.end("Bonjour "+  req.params.firstname);
// });

app.get('/hello/:firstname', function(req, res){
    res.render('hello.ejs', {name: req.params.firstname});
});



app.listen(3000, function(){
    console.log("serverlistenning on port 3000");
});

