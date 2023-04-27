import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../service/graficas.service';

@Component({
  selector: 'app-circular-http',
  templateUrl: './circular-http.component.html',
  styleUrls: ['./circular-http.component.css']
})
export class CircularHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
  }


}
