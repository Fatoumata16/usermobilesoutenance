import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Essayprevencore2Page } from './essayprevencore2.page';

const routes: Routes = [
  {
    path: '',
    component: Essayprevencore2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Essayprevencore2PageRoutingModule {}
