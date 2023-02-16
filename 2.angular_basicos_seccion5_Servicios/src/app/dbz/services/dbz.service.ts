import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{


    // la bara baja de personajes es un estandar 
    // para idicar que la propiedad es privada
    // pero lo que realmente lo hace privado es el private
   private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre: 'Vegeta',
          poder:12000
        }
      ];
    // javascript todo lo manda por referencia
    // entonces para romper esa relacion lo ponemos entre [] indicando que es un array
    //con los ... para romper la refernecia (buena practica no obligatorio)
    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}