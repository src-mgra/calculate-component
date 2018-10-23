import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc-component.component';

@NgModule({
    declarations: [CalcComponent],
    exports: [CalcComponent]
})
export class CalcComponentModule { }
