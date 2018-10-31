# Calc-Component

## use of calc-component
npm install git+https://github.com/src-mgra/calc-component --save

or

npm install calc-component --save

in project:

import { CalcComponent } from 'calc-component';


## bind component
refer to component by insert:  

            calculate linear equation system:
            
             1x+1y+1z=3
             2x-3y-1z=2
             4x-5y-1z=1

            < app-calc-component value='{"size":3,"matrix":[[1,1,1,3],[2,-3,-1,2],[4,-5,-1,1]]}' selCalc='eq-solver'></app-calc-component >


            or
            calculate circular area:

            < app-calc-component value=5 selCalc='circulararea'></app-calc-component >
            

            or
            calculate cirumference:

            < app-calc-component value=5 selCalc='circumference'></app-calc-component >


## build component

in directory clac-component you can build the component with

npm run build

and publish it later as a npm-package with

npm publish --access=public

(set keys and license before)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Demo:
https://stackblitz.com/github/src-mgra/calc-component


