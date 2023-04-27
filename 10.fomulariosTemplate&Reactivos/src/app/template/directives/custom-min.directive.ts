import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CustonMinDirecive,
            multi: true
        }
    ]
})
export class CustonMinDirecive implements Validator {

    @Input() minimo!: number;

    constructor() {
        console.log("Directiva", this.minimo);

    }

    validate(control: FormControl) {
        const inputValue = control.value;
        
        return (inputValue < this.minimo) ? {'custonMin':true} : null;
    }

}
