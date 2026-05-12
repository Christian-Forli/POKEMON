import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './type-list.component.html'
})
export class TypeListComponent implements OnInit {
  typeName = '';
  pokemons: Pokemon[] = [];

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('name')!;
    this.service.getTypeDetail(this.typeName).subscribe(data => {
      this.pokemons = data.pokemon.slice(0, 20).map(p => p.pokemon);
    });
  }
}
