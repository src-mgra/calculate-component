import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calc-component',
    template:
            `<div [hidden]="selCalc=='circumference'">
                <b>circular area(value: {{value}}): {{res}}</b>
            </div>
            <div [hidden]="selCalc=='circulararea'">
                <b>circumference(value: {{value}}): {{res}}</b>
            </div>`
})

export class CalcComponent implements OnInit {
    @Input() public selCalc: String;
    @Input() public value: Number;
    public res: any;
    constructor() {
    }
    getAreaCircular(radius: any) {
        return (Math.PI * (radius * radius));
    }
    getCircumference(radius: any) {
        return (2 * Math.PI * radius);
    }
    ngOnInit() {
        if (this.selCalc === 'circulararea') {
            this.res = this.getAreaCircular(this.value);
        }
        if (this.selCalc === 'circumference') {
           this.res = this.getCircumference(this.value);
        }
        console.log('show res: ' + this.res);
    }
}
