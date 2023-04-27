import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  palabra: string = 'nosotros';
  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] =[
    {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Dardevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.rojo
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  mayusMinus(){
    // if(this.enMayusculas){
    //   this.enMayusculas = false;
    // }
    // else{
    //   this.enMayusculas = true;
    // }
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }


}
