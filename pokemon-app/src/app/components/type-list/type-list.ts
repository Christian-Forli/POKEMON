import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon';
import { Pokemon, TypeDetail } from '../../models/pokemon.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './type-list.html'
})
export class TypeListComponent implements OnInit, OnDestroy {
  typeName = '';
  pokemons: Pokemon[] = [];
  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private service: PokemonService, private cr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('name')!;
    this.sub = this.service.getTypeDetail(this.typeName)
      .subscribe((data: TypeDetail) => this.onDataReceived(data));
  }

  onDataReceived(data: TypeDetail) {
    this.pokemons = data.pokemon.slice(0, 20).map(p => p.pokemon);
    this.cr.detectChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}