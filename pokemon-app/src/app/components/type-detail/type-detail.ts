import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-type-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './type-detail.html'
})
export class TypeDetailComponent implements OnInit, OnDestroy {
  pokemon: any = null;
  typeName = '';
  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private service: PokemonService, private cr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeName = this.route.snapshot.paramMap.get('name')!;
    const url = this.route.snapshot.queryParamMap.get('url')!;
    this.sub = this.service.getPokemonByUrl(url)
      .subscribe((data: any) => this.onPokemonReceived(data));
  }

  onPokemonReceived(data: any) {
    this.pokemon = data;
    this.cr.detectChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
