import { Component, OnInit } from '@angular/core';

// Importa a classe "Hero"
import { Hero } from '../hero';

// Metadata do Componente
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Propriedades
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  // Define que a propriedade "hero" será do tipo "Hero"

  constructor() { }

  ngOnInit() {
    // Chamado quando o componente inicia
  }

}
