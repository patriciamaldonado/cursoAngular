import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "peru";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (resp) => {
          console.log("paises ->>>>>>>>", resp);
          this.paises = resp;

        },
        error: (err) => {
          console.log("Error ->", err);
          this.hayError = true;
          this.paises = [];
        },
        complete: () => {
          console.log("Completado");
        }
      });
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paisesSugeridos = paises.splice(0,5)
        },
        error: (err) => {
          this.paisesSugeridos = [];
        },
     
   });

  }

  buscarSugerido(termino:string){
    this.buscar(termino);

  }



}



