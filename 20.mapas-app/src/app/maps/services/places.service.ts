import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  userLocation?: [number,number];
  isLoadingPlaces: boolean = false;
  places: Feature[] = [];

  get isUserLocationReady():boolean {
    return !!this.userLocation;
  }

  constructor(private placesApi: PlacesApiClient,
    private mapService: MapService) { 
    this.getUserLocation();
  }

  getUserLocation(): Promise<[number,number]> {
   return new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        this.userLocation = [coords.longitude, coords.latitude];
        resolve(this.userLocation);
      },
      (err) => {
        alert("No se pudo obtener la geolocalizacion");
        console.log(err);
        reject();
        
      }
    );
   })
  }


  getPlacesByQuery(query: string = ''){
    // Evaluar cuando el query es nulo
    if(query.length === 0){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if(!this.userLocation) throw Error ('No hay userLocation')

    this.isLoadingPlaces = true; 

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params:{
        proximity: this.userLocation?.join(',')
      }
    })
    .subscribe( resp => {
      console.log(resp.features);

      this.isLoadingPlaces = false; 
      this.places = resp.features;
      this.mapService.createMarkersFromPlaces(this.places, this.userLocation!);
      
    })
  }

  deletePlaces(){
    this.places = [];
  }

}
