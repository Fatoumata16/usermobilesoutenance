import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiljuryPage } from './profiljury.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiljuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiljuryPageRoutingModule {}
