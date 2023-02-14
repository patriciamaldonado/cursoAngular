import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 346',
    precio: 10,
    existencias: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid &&
    this.miFormulario?.controls.producto?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls.precio?.touched &&
    this.miFormulario?.controls.precio?.value < 0; 
  }

  guardar(){
    // console.log(this.miFormulario);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
    
  }

}
