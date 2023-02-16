import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { nomApePattern, emailPattern, usernameValidator } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group(
    { 
      nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nomApePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
      username: ['', [Validators.required, this.validatorService.usernameValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,]],
  },{
    validators: [this.validatorService.camposIguales('password', 'confirmPassword')]
  }
  )

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Pepito Perez',
      email: 'pepito@pepin.com',
      username: 'pepitop'
    })
   
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  enviarFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}

