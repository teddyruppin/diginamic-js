export enum Type {
    Feu,
    Eau,
    Plante,
    Poison,
    Electrique,
    Vol
}

export class PokemonModel {

    specie: string;
    description: string;
    types: Type;

    constructor(specie: string,
                description: string,
                types: Type) {
        this.specie = specie;
        this.description = description;
        this.types = types;
    }
}

