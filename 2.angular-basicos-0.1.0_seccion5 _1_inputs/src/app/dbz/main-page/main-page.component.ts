import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder:15000
    },
    {
      nombre: 'Vegeta',
      poder:12000
    }
  ];

  nuevoPersonaje: Personaje = {
    nombre: 'Pepe',
    poder:1523000
  }

}
