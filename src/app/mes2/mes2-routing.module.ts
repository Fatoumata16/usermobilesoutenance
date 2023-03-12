import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mes2Page } from './mes2.page';

const routes: Routes = [
  {
    path: '',
    component: Mes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mes2PageRoutingModule {}
