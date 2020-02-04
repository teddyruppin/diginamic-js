import { Component, OnInit } from '@angular/core';
// import { PokemonModel } from './pokemon.model';

@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // private currentPokemon: PokemonModel;
  constructor() { }

  ngOnInit() {
  }

  // updateCurrentPokemon(pokemon){
  //   this.currentPokemon = pokemon;
  // }

}
