import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input()  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  // Sierve para emitir eventos, pasa variables al padre (maincomponent) emite un personaje
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }
    console.log("Personaje nuevo ->",this.nuevoPersonaje)
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
 
}
