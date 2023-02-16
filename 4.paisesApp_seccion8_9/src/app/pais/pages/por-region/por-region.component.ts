import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU','EFTA', 
  'CARICOM',
  'PA', 
  'AU',
  'USAN', 
  'EEU', 
  'AL', 
  'ASEAN',
  'CAIS',
  'CEFTA', 
  'NAFTA',
  'SAARC',
  ];
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    //TODO: llamada al servicio por region
    this.paisService.buscarRegion(region)
    .subscribe({
      next: (resp) => {
        console.log("respuesta",resp);
        this.paises = resp;
      }
    })
  }

  


}
