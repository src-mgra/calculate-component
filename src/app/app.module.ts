import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EqSolverComponent } from './eq-solver/eq-solver.component';
import { CircularAreaComponent } from './circular-area/circular-area.component';
import { CalcComponentModule } from 'src/app/calc-component';
import { CircumferenceComponent } from './circumference/circumference.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EqSolverComponent,
    CircularAreaComponent,
    CircumferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalcComponentModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
