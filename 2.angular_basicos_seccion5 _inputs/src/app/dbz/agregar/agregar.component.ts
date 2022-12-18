import { Component, Input, OnInit } from '@angular/core';
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

  @Input() personajes: Personaje[] = [];
  
  @Input()  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }


  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }
    console.log("Personaje nuevo ->",this.nuevoPersonaje)

    this.personajes.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
 
}
