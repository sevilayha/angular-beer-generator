import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Beer } from '../models/beer.model';

@Injectable()
export class BeerService {
  apiUrl;

  constructor(private http: HttpClient) {}

  generate(): Observable<Beer> {
    return this.http.get<Beer>(`${this.apiUrl}/beerme`);
  }
}
