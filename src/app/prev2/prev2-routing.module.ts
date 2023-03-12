import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prev2Page } from './prev2.page';

const routes: Routes = [
  {
    path: '',
    component: Prev2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prev2PageRoutingModule {}
