import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { IPokemon } from '../../interfaces/IPokemon';
import { PokedexService } from '../../services/pokedex.service';
import { HttpErrorResponse } from '@angular/common/http';

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
