import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Votejury2Page } from './votejury2.page';

const routes: Routes = [
  {
    path: '',
    component: Votejury2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Votejury2PageRoutingModule {}
