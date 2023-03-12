import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueiljuryPage } from './accueiljury.page';

const routes: Routes = [
  {
    path: '',
    component: AccueiljuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueiljuryPageRoutingModule {}
