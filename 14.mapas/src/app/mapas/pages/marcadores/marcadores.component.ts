import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'


interface MarcadorColor{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number,number]
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  //long lat
  center: [number, number] = [-3.6118650267114347, 37.147912504486875]

  marcadores: MarcadorColor[] = [];

  constructor() { }
  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center, //long, lat 
      zoom: this.zoomLevel
    });

     this.leerLocalStorage();
    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola mundo'
    // new mapboxgl.Marker({
    //   element: markerHtml
    // }
    // )
    //   .setLngLat(this.center)
    //   .addTo(this.mapa);


  }

  agregarMarcador(){
    //genera un color arelatorio
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
   //creacion de un marcador 
   const nuevoMarcador = new mapboxgl.Marker({
      draggable: true, // para que se pueda mover
      color: color
    })
    .setLngLat(this.center) 
    .addTo(this.mapa);

    // array donde se almacenan todos los marcadores
    this.marcadores.push({
      color: color,
      marker: nuevoMarcador
    })
    this.guardarMarcadoresLocalStorage();

        // Evento cuando arrastramos un marcador y asi 
      // actualizamos su posicion en el mapa (lng,lat)
    nuevoMarcador.on('dragend', () =>{
      this.guardarMarcadoresLocalStorage();
    })
  }
  // funcion para posicionarnos en cada marcador
  irMarcador(marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  guardarMarcadoresLocalStorage(){

    const lngLatArray: MarcadorColor[] = [];

    this.marcadores.forEach( m =>{
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArray.push({
        color: color,
        centro: [lng, lat]
      });
    })

    localStorage.setItem('marcadores',JSON.stringify(lngLatArray) )
  }

  leerLocalStorage(){
    if( !localStorage.getItem('marcadores')){
      return;
    }
    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);
    
    // leemos los marcadores guardados en la localStorage
    // los recorremos y los recuperamos 
    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      }).setLngLat(m.centro!)
      .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      });

      // Evento cuando arrastramos un marcador y asi 
      // actualizamos su posicion en el mapa (lng,lat)
      newMarker.on('dragend', () =>{
        this.guardarMarcadoresLocalStorage();
      })

    })
  
  }


  // Necesito borrar el marcador de dos lugares
  // uno del objeto del mapa y tambien del array de marcadores
  borrarMarcador(i: number){
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i,1);
    this.guardarMarcadoresLocalStorage();
  }
}