import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nomApePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


   usernameValidator (control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'pepino'){
      return {
        validacionIncorrecta: true,
      }
    }
    // Cuando devolvemos null en una validación significa que ha ido bien
    return null;
    console.log(valor);
  }

  camposIguales(campo1: string, campo2: string){
    return(formGroup: AbstractControl): ValidationErrors | null =>{
      
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if(campo1 !== campo2){
        formGroup.get(campo2)?.setErrors({
          noIguales:true
        })
        return {noIguales: true}
      }
      
      formGroup.get(campo2)?.setErrors({
        noIguales:null
      })
      return null;
    }
  }
}
