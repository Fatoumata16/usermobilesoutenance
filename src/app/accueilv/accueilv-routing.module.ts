import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilvPage } from './accueilv.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilvPageRoutingModule {}
