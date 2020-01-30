var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('index.ejs', { name: ["omer", "marge" ]});
});

app.get('/profile/:name', function(req, res){
    res.render('profile.ejs', {name: req.params.name});
});


app.listen(4000, function(){
    console.log("serverlistenning on port 4000");
});