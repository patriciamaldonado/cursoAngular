import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect para femenino o masculino
  nombre:string = 'Patricia';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural para plural o singular

  clientes: string[] = ["Maria","Juan", "Fernando", "Luis"];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    this.nombre = 'Juan';
    this.genero = 'masculino';

  }
  borrarCliente(){
    this.clientes.pop();
  }

  // keyValue Pipe

  persona = {
    nombre: 'Patricia',
    edad:23,
    direccion:  'flores rojas'
  }

  heroes = [
    {
      nombre: 'spiderman',
      value: 34
    },
    {
      nombre: 'superman',
      value: 30
    },
    {
      nombre: 'hulk',
      value: 56
    },
  ]

// Async ie
// interval imprime valores en el intervalo que especifiques y con el pipe async se van mostrando
miObservable = interval(5000); // 0,1,2..

valorPromesa = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve('Tenemos data de promesa')
  }, 3500);
});

}
