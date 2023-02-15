import { Component} from '@angular/core';


interface Persona{
  nombre:string;
  favoritos: Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {


 persona: Persona ={
  nombre:'Patricia',
  favoritos:[{
    id:1,
    nombre:'Metal Gear',
  },
  {
    id:2,
    nombre:'Death',
  },
]
  }

  nuevoJuego:string = '';
 

agregarJuego(){
  const nuevoFavorito: Favorito = {
    id: this.persona.favoritos.length + 1,
    nombre: this.nuevoJuego
  }
  this.persona.favoritos.push({...nuevoFavorito});
  this.nuevoJuego = '';
}

  guardar(){
    console.log('guardar');

  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }


}
