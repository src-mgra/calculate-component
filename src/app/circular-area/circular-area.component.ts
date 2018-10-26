import { Component, OnInit } from '@angular/core';
import { CalcComponent } from 'clac-component';

@Component({
  selector: 'app-circular-area',
  templateUrl: './circular-area.component.html',
  styleUrls: ['./circular-area.component.scss']
})
export class CircularAreaComponent implements OnInit {
  public render: Boolean;
  public radius: number;
  public r: number;
  constructor() { }

  onChange(event: any, r: number) {
    console.log(r);
    this.r = Number(r);
    this.render = !this.render;
  }

  ngOnInit() {
    this.render = false;
  }
}
