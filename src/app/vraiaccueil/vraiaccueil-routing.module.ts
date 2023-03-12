import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VraiaccueilPage } from './vraiaccueil.page';

const routes: Routes = [
  {
    path: '',
    component: VraiaccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VraiaccueilPageRoutingModule {}
