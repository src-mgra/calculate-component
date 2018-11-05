import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calc-component',
    template:
            `<div [hidden]="selCalc != 'eq-solver'">
            <b>eq-solver(value: {{value}}): {{res}}</b>
            </div>
            <div [hidden]="selCalc != 'circulararea'">
                <b>circular area(value: {{value}}): {{res}}</b>
            </div>
            <div [hidden]="selCalc != 'circumference'">
                <b>circumference(value: {{value}}): {{res}}</b>
            </div>`
})

export class CalcComponent implements OnInit {
    @Input() public selCalc: String;
    @Input() public value: Number;
    //*** solve eq
    public fkt: number[][] = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    public knt: number[] = [0, 0, 0, 0, 0, 0];
    public erg: number[] = [0, 0, 0, 0, 0, 0];
  
    public qMax = 2;
    public k2 = 2;
    public j = 2;
    //*** solve eq
    public res: any;
    constructor() {
    }
    getAreaCircular(radius: any) {
        return (Math.PI * (radius * radius));
    }
    getCircumference(radius: any) {
        return (2 * Math.PI * radius);
    }

    //*** solve eq
    setDemo() {
        this.k2 = 2; this.j = 2;

        this.fkt[0][0] = 1;
        this.fkt[1][0] = 2;
        this.fkt[2][0] = 4;

        this.fkt[0][1] = 1;
        this.fkt[1][1] = -3;
        this.fkt[2][1] = -5;

        this.fkt[0][2] = 1;
        this.fkt[1][2] = -1;
        this.fkt[2][2] = -1;

        this.knt[0] = 3;
        this.knt[1] = 2;
        this.knt[2] = 1;

    }
    CGls(s) {
            let z: number;
            let fakt: number;
            console.log(z);
            let id: number;
            z = s + 1;
            id = 0;
            for (z = s + 1; z < this.j + 1; z++) {
                if (this.fkt[z][s] !== 0) {
                    fakt = (-1 * this.fkt[z][s]) / this.fkt[s][s];
                    for (id = 0; id <= this.k2; id++) {
                        this.fkt[z][id] = this.fkt[z][id] + this.fkt[s][id] * fakt;
                    }
                    this.knt[z] = this.knt[z] + (this.knt[s] * fakt);
                }
            }
        }

        CFkt() {
            let z: number;
            let id: number;
            let sum: number;
            let result = [];
            for (z = this.j; z >= 0; z--) {
                sum = 0;
                for (id = 0; id < this.k2 + 1; id++) {
                    sum = sum + (this.erg[id] * this.fkt[z][id]);
                }
                this.erg[z] = (this.knt[z] + sum * -1) / this.fkt[z][z];
                this.erg[z] = Math.round(this.erg[z] * 1000) / 1000;
                result.push(' res(' + z + ') => ' + this.erg[z]);
            }
          return result;
        }

        CalcGls() {
            let i: number;

            for (i = 0; i < this.k2 + 1; i++) {
                this.CGls(i);
            }
            let res = this.CFkt();
            return res;
        }

        doSetMatrix(matrix: any, size: number) {
           let i = 0;
           let k = 0;
           for (i = 0; i < size; i++) {
            for (k = 0; k < size; k++) {
              this.fkt[i][k] = matrix[i][k];
            }
           this.knt[i] = matrix[i][size];
          }
        }

    solveEquation(equation: any) {
        const json = JSON.parse(equation);
        if (!json.size) {
            this.setDemo();
        } else {
            this.j = json.size - 1;
            this.k2 = json.size - 1;
            this.doSetMatrix(json.matrix, json.size);
        }
        // clac eq by gauss agorithmus
        let res = this.CalcGls();
       
       return res;
    }
  //*** solve eq
    ngOnInit() {
        if (this.selCalc === 'eq-solver') {
            this.res = this.solveEquation(this.value);
        }
        if (this.selCalc === 'circulararea') {
            this.res = this.getAreaCircular(this.value);
        }
        if (this.selCalc === 'circumference') {
           this.res = this.getCircumference(this.value);
        }
        console.log('show res: ' + this.res);
    }
}
