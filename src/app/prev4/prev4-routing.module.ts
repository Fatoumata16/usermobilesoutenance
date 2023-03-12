import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prev4Page } from './prev4.page';

const routes: Routes = [
  {
    path: '',
    component: Prev4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prev4PageRoutingModule {}
