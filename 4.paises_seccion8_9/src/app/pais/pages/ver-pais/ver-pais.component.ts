import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {


  // la exclamacion quiere decir que puede ser nulo

  pais!:Country;
  capital!:Country;
  bandera!:Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {


    this.activateRoute.params
    .pipe(
      switchMap((param)=> this.paisService.getPaisPorCodigo(param['id'])),
      tap(console.log)
    )
    .subscribe(pais =>{
      console.log("respuesta code?",pais);
      this.pais = pais;
      

    });
    // este codigo es el mimso de arriba pero hecho de otra forma más larga
    // this.activateRoute.params
    // .subscribe(params =>{
    //   console.log("params2",params)
    //   console.log("params", params['id']);
      
    //   this.paisService.getPaisPorCodigo(params['id'])
    //   .subscribe(pais =>{
    //     console.log(pais);
        
    //   });

    // });
  }


}
