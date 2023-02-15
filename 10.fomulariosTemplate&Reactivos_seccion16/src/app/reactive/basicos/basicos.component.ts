import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Iniciar valores en formulario
    this.miFormulario.reset({
      nombre: 'RTX',
      precio: 1600,
      existencias: 10
    })
  
  }

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4000ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // });
 
  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.minLength(3) ]],
    precio: [0 ,[ Validators.required, Validators.min(3) ]],
    existencias: [0, [ Validators.required, Validators.min(3) ]],
  })


  // campoEsValido(){
  //   return this.miFormulario.controls.nombre.errors && 
  //                   this.miFormulario.controls.nombre.touched
  // }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
                    this.miFormulario.controls.nombre.touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
  }
}

