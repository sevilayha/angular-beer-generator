import { Component } from '@angular/core';
import { BeerService } from './services/beer.service';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- beer me button -->
    <app-beer-me-button (beerCreated)="fetchBeer()"></app-beer-me-button>

    <!-- loop over beer attributes -->
    <div class="beer-slots" *ngIf="slots">
      <app-beer-slot *ngFor="let slot of slots" [slot]="slot"></app-beer-slot>
    </div>
  `
})
export class AppComponent {
  beer: Beer;
  slots;

  constructor(private beerService: BeerService) {}

  fetchBeer() {
    this.beerService.generate().subscribe(data => this.beer = data);
  }
}
