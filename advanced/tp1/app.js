const axios = require('axios');
var Planet = require('./planet.js').Planet;

let p1 = axios.get('https://swapi.co/api/planets/')
.then(function(response){
    var tab = [];
    // console.log(response.data)
    response.data.results.forEach(function(p){
        if (response.data.results._population === 'unknown'){  
            var p = new Planet({name:p.name , population:'0'});
            tab.push(p);
        }else {
            var p = new Planet({name:p.name , population:p.population});
            tab.push(p);
        }
    });
    console.log(tab);
     
    Planet.countPlanetPopulation(tab);
    
    //console.log(response);
})
 
 
