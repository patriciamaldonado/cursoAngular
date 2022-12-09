import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService: DbzService) { 

  }

  ngOnInit(): void {
  
  }
 
  // Valor por defecto que aparece en el formulario
  nuevoPersonaje: Personaje = {
    nombre: 'Pepe',
    poder:1523000
  }



}
