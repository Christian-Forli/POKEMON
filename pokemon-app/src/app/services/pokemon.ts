import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeListResponse, TypeDetail } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<TypeListResponse> {
    return this.http.get<TypeListResponse>(`${this.base}/type`);
  }

  getTypeDetail(name: string): Observable<TypeDetail> {
    return this.http.get<TypeDetail>(`${this.base}/type/${name}`);
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}