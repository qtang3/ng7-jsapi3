import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { M4spMapComponent } from './m4sp-map/m4sp-map.component';

@NgModule({
  declarations: [
    AppComponent,
    M4spMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
