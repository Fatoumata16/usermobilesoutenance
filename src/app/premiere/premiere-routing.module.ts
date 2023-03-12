import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremierePage } from './premiere.page';

const routes: Routes = [
  {
    path: '',
    component: PremierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremierePageRoutingModule {}
