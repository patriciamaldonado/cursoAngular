import { NgModule, Component } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module')
    .then( m => m.AuthModule)

  },
  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module')
    .then( m => m.HeroesModule)
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
