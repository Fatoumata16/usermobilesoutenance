import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotevaliderPage } from './votevalider.page';

const routes: Routes = [
  {
    path: '',
    component: VotevaliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotevaliderPageRoutingModule {}
