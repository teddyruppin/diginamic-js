import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model';
import data from '../../assets/pokemon.data.js';

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: PokemonModel[] = new Array();
  // @Output() updatePokemonName: EventEmitter<PokemonModel> = new EventEmitter<PokemonModel>();


  constructor() { }

  ngOnInit() {
    data.forEach(element => {
    let specie = element.specie;
    let description = element.description;
    let type = element.types;
    let pokemon = new PokemonModel(specie, description, type);
    this.pokemons.push(pokemon);
  });

}

  // getPokemonName(pokemon : PokemonModel){
  //   this.updatePokemonName.emit(pokemon.specie);
  // }
}
