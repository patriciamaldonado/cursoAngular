import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styleUrls: ['./heroe-tarjeta-component.component.css']
})
export class HeroeTarjetaComponentComponent implements OnInit {

  //Vamos a recibir mediante un input los heroes de listado component
  //con la exclamacion aseguramos que siempre va a llegar un heroe
  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {

  
  }

}
