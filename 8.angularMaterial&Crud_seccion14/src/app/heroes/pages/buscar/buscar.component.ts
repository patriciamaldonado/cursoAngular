import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { HeroesModule } from '../../heroes.module';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  HeroesSeleccionado!: Heroe | undefined;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes=>{
      this.heroes = heroes;
    })
  }

  opcionSeleccionada(event: any){
    const heroe = event.option.value;
    this.termino = heroe.superhero;
    console.log("event",event.option.value);
    if(!event.option.value){
      this.HeroesSeleccionado = undefined;
    }
    
    console.log("id", heroe )
    if( this.termino.length > 0){
      this.heroesService.getHeroeById(heroe.id!).subscribe(heroe => {
        heroe = this.HeroesSeleccionado = heroe;
      })

    }
 
    
 
  }




}
