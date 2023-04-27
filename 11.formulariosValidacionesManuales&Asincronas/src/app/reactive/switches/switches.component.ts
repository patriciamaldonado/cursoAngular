import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Inicializo mi formulario
    this.miFormulario.reset({ ...this.persona, condiciones: true });
    // this.miFormulario.valueChanges.subscribe(form=>{
    //   delete form.condiciones;
    //   this.persona = form;
    // });
    // // si queremos hacer de una forma mas limpia quedarnos con todo menso cnodicinoes lo hacemos 
    // de la sigueinte forma
    this.miFormulario.valueChanges.subscribe(({condiciones, ...restoArgumentos})=>{
      this.persona = restoArgumentos;
    });
  
  }


  guardar(){
   const formValue =  {...this.miFormulario.value};
   delete formValue.condiciones;
   this.persona = formValue;
  }
}
