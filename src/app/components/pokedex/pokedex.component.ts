import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  searchPokemon(): void {
    // This method should search for pokemon data.
  }
}
