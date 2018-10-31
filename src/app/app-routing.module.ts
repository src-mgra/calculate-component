import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EqSolverComponent } from './eq-solver/eq-solver.component';
import { CircularAreaComponent } from './circular-area/circular-area.component';
import { CircumferenceComponent } from './circumference/circumference.component';

const routes: Routes = [{ path: 'src/app/eq-solver', component: EqSolverComponent },
{ path: 'src/app/circular-area', component: CircularAreaComponent },
{ path: 'src/app/circumference', component: CircumferenceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
