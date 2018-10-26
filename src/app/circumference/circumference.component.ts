import { Component, OnInit } from '@angular/core';
import { CalcComponent } from 'clac-component';

@Component({
  selector: 'app-circumference',
  templateUrl: './circumference.component.html',
  styleUrls: ['./circumference.component.scss']
})
export class CircumferenceComponent implements OnInit {
  public render: Boolean;
  public radius: number;
  public r: number;
  constructor() { this.radius = 5;  }

  onChange(event: any, r: number) {
    console.log(r);
    this.r = Number(r);
    this.render = !this.render;
  }

  ngOnInit() {
    this.render = false;
  }

}
