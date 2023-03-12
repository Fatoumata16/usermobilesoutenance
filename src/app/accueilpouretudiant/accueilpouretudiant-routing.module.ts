import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilpouretudiantPage } from './accueilpouretudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilpouretudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilpouretudiantPageRoutingModule {}
