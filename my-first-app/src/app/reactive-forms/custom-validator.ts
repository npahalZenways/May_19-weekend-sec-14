import { AbstractControl } from "@angular/forms";


export function MyValidator(control: AbstractControl){
    if(control.value.indexOf('hello') == -1){
        return {isInValid: true}
    }
}