import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Resultatvrai1Page } from './resultatvrai1.page';

const routes: Routes = [
  {
    path: '',
    component: Resultatvrai1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Resultatvrai1PageRoutingModule {}
