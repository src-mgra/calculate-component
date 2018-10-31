import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalcComponent } from '../calc-component';

@Component({
  selector: 'app-eq-solver',
  templateUrl: './eq-solver.component.html',
  styleUrls: ['./eq-solver.component.scss']
})
export class EqSolverComponent implements OnInit {
  public render: Boolean;
  public matrix: String;
  public m: String;
  constructor(private cdRef: ChangeDetectorRef) { }

  onChange(event: any, m: String) {
    console.log(m);
    this.m = m;
    this.render = true;
    this.cdRef.detectChanges();
    this.render = false;
  }

  ngOnInit() {
    this.render = false;
  }
}
