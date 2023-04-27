import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }
  // Con esto vamos a decir que esto va a venir del componente padre,
  // quien lo utilice me puede mandar esta propiedad de personaje
 // Para mostrar la lista de personajes en la pagina
  // @Input() personajes: Personaje[] = [];

    get personajes(){
    return this.dbzService.personajes;
  }
}
