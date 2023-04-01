import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { CircularComponent } from './pages/circular/circular.component';
import { CircularHttpComponent } from './pages/circular-http/circular-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficasService } from './service/graficas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    CircularComponent,
    CircularHttpComponent,
    GraficaBarraComponent,
 
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ],
  providers: [
    GraficasService,
 ]
})
export class GraficasModule { }
