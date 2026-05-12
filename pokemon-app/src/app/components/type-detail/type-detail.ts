import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-type-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './type-detail.component.html'
})
export class TypeDetailComponent implements OnInit {
  pokemon: any = null;
  typeName = '';

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('name')!;
    const url = this.route.snapshot.queryParamMap.get('url')!;
    this.service.getPokemonByUrl(url).subscribe(data => {
      this.pokemon = data;
    });
  }
}
