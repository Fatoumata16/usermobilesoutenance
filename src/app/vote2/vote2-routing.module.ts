import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vote2Page } from './vote2.page';

const routes: Routes = [
  {
    path: '',
    component: Vote2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vote2PageRoutingModule {}
