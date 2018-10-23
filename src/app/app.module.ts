import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularAreaComponent } from './circular-area/circular-area.component';
import { CalcComponentModule } from 'src/app/calc-component';
import { CircumferenceComponent } from './circumference/circumference.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularAreaComponent,
    CircumferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalcComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
