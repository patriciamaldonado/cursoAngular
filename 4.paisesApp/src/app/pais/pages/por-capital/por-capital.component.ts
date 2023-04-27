import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  termino: string = "peru";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (resp) => {
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



}