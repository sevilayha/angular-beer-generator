import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { BeerSlotComponent } from './components/beer-slot.component';
import { BeerMeButtonComponent } from './components/beer-me-button.component';
import { BeerService } from './services/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeerSlotComponent,
    BeerMeButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
