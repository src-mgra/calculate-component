import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private cdRef: ChangeDetectorRef) { }

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
