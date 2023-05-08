import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;
  constructor(private placesService: PlacesService) { }

  onQueryChanged(query:string = ''){
    console.log("query",query);
    // SI tiene un valor lo limpiamos
    if(this.debounceTimer) clearTimeout(this.debounceTimer);

    // despues de un x tiempo(350 milesimas) va a mandar lo que hemos escrito en la caja de texto
    this.debounceTimer = setTimeout(() => {
      console.log("mandar este query", query);
 
      this.placesService.getPlacesByQuery(query);
    }, 350);
     
  }

}
