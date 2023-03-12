import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prev3Page } from './prev3.page';

const routes: Routes = [
  {
    path: '',
    component: Prev3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prev3PageRoutingModule {}
