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
        var total = tab.reduce((a, b)=> a + b._population,0);
        console.log(total);
        return total;
    }
}
module.exports.Planet = Planet;