import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  ngOnInit(): void {
  }
  
  @Input()  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) { }


  // Sierve para emitir eventos, pasa variables al padre (maincomponent) emite un personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }
    console.log("Personaje nuevo ->",this.nuevoPersonaje)
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
 
}
