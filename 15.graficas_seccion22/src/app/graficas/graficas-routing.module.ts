import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { CircularComponent } from './pages/circular/circular.component';
import { CircularHttpComponent } from './pages/circular-http/circular-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barra', component: BarrasComponent
      },
      {
        path: 'barra-doble', component: BarrasDobleComponent
      },
      {
        path: 'circular', component: CircularComponent
      },
      {
        path: 'circular-http', component: CircularHttpComponent
      },
      {
        path: '**', redirectTo: 'barra'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
