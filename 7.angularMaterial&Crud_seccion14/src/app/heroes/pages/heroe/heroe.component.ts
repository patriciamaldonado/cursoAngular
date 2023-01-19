import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id))
    ).subscribe (heroe  => this.heroe = heroe)
 
  }

  volver(){
    this.router.navigate(['/heroes/listado'])
  }

}
