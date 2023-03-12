import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resultat2Page } from './resultat2.page';

const routes: Routes = [
  {
    path: '',
    component: Resultat2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resultat2PageRoutingModule {}
