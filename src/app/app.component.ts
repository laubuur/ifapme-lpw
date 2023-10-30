import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { PersonneComponent } from './components/personne/personne.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EntrepriseComponent, PersonneComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu = "";

  public setMenu(value: string) {
    this.menu = value;
  }
}
