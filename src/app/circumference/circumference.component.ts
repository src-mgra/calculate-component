import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private cdRef: ChangeDetectorRef) { this.radius = 5;  }

  onChange(event: any, r: number) {
    console.log(r);
    this.r = Number(r);
    this.render = true;
    this.cdRef.detectChanges();
    this.render = false;
  }

  ngOnInit() {
    this.render = false;
  }

}
