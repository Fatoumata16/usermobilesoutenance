import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagevotePage } from './pagevote.page';

const routes: Routes = [
  {
    path: '',
    component: PagevotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagevotePageRoutingModule {}
