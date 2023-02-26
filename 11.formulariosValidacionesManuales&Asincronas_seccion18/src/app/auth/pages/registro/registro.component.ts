import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group(
    { 
      nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nomApePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
      username: ['', [Validators.required, this.validatorService.usernameValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,]],
  },{
    validators: [this.validatorService.camposIguales('password', 'confirmPassword')]
  }
  )



  get emailErrorMsg(): string{
   const errors = this.miFormulario.get('email')?.errors;

   if(errors?.required) {
    return 'Email es obligatorio';
   } else if (errors?.pattern){
    return 'No tiene formato de correo';
   } else if (errors?.emailTomado){
    return 'Ese email ya esta en uso';
   }
   return '';
  }

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Pepito Perez',
      email: 'test1@test.com',
      username: 'pepitop',
      password: '123456',
      confirmPassword: '123456'
    })
   
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  // }

  // emailFormat(){
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  // }

  enviarFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}

