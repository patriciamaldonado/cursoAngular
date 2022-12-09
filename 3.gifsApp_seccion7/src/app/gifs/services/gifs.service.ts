import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey     : string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  public resultados: Gif[] = [];                            

  get historial(){

    //rompemos la referencia ccon los tres puntos
    // por si hacemos alguna modificacion y no modifique
    // el array original
    return [...this._historial];
  }

  constructor(
    private http: HttpClient
    ){

      // if( localStorage.getItem('historial')){
      //   this._historial = JSON.parse(localStorage.getItem('historial')!);
      // }

      // Equivalencia al if anterior pero solo en una linea

      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

      this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query:string){
    // Pasamos a miniscula para que no se admitan 
    // tampoco duplicados en mayuscula y minuscula
    query = query.trim().toLocaleLowerCase();
    //Comprobamos que el valor insertado no exista en el array
    // Si no existe lo inserta
    if( !this._historial.includes(query)){
      this._historial.unshift(query);
    }
    // Nos aseguramos de no poder introducir más caracteres (max 10)
    this._historial = this.historial.splice(0,10);

    localStorage.setItem('historial', JSON.stringify(this._historial))

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query );

this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
.subscribe( ( resp ) => {
  this.resultados = resp.data;
  localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
});
    
  }

}