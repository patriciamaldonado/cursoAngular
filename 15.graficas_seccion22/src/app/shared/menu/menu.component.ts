import { Component, OnInit } from '@angular/core';

interface MenuIten {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: MenuIten[] = [

    {ruta: '/graficas/barra', texto: 'Barras'},
    {ruta: '/graficas/barra-doble', texto: 'Barras Dobles'},
    {ruta: '/graficas/circular', texto: 'Circular'},
    {ruta: '/graficas/circular-http', texto: 'Circular Http'},

  ]


}
