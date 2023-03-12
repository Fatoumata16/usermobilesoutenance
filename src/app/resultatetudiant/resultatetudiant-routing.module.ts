import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatetudiantPage } from './resultatetudiant.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatetudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatetudiantPageRoutingModule {}
