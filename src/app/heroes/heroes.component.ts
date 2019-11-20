import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

// Lista de Heróis
import { HeroService } from '../hero.service';

// Metadata do Componente
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Propriedades
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // Chamado quando o componente inicia
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // Quando selecionar um herói
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
