import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { PersonneComponent } from './components/personne/personne.component';
import { MenuComponent } from './components/menu/menu.component';
import { DemoService } from './services/demo.service';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EntrepriseComponent, PersonneComponent, MenuComponent, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu = "";

  constructor(public service: DemoService){}

  setMenuInApp(value: string) {
    this.menu = value;
  }
}
