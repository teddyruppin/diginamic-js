class Planet{

    constructor({name, population}){
        this.name=name;
        this.population=population;
    }

    get name(){
        return this._name;
    }

    set name(str){
        this._name = str;
    }

    get population(){
        return this._population;
    }

    set population(str){
        this._population = str;
    }

    static countPlanetPopulation(tab){  
        for(var i = 0; i < tab.length; i++)    
        if (isNaN(tab[population])==true){  
            var total = tab.reduce((a,b) => a +  parseInt(b._population,10) ,0);
        }
    static countPlanetPopulation(tab){        
        var total = tab.reduce((a, b)=> a + b._population,0);
        console.log(total);
        return total;
    }
}
module.exports.Planet = Planet;

// var total = tab.reduce((a,b) => a +  parseInt(b._population,10) ,0);
// var total = tab.reduce((a, b)=> a + b._population,0);

module.exports.Planet = Planet;
