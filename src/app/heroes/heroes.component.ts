import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

// Lista de Heróis
import { HEROES } from '../mock-heroes';

// Metadata do Componente
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Propriedades
  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    // Chamado quando o componente inicia
  }

  // Quando selecionar um herói
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
