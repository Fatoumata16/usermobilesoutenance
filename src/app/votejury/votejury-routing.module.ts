import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotejuryPage } from './votejury.page';

const routes: Routes = [
  {
    path: '',
    component: VotejuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotejuryPageRoutingModule {}
