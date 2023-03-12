import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreurrPage } from './erreurr.page';

const routes: Routes = [
  {
    path: '',
    component: ErreurrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErreurrPageRoutingModule {}
