import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  pokemons$: Observable<any> = this.service.getPokemons();

  constructor(public service: PokemonService){}

}
