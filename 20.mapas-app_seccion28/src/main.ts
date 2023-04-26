import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmltbGQiLCJhIjoiY2xleGRwZWZ2MDFweDN5bzl0YXB5aHJ3MyJ9.YGMHibFs-ESkNp220O1Xow';

if( !navigator.geolocation){
  alert("El navegador no soporta la geolocalizacion")
  throw new Error('Navegador no soporta la Geolocalizacion')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
