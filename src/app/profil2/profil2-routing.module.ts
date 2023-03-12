import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profil2Page } from './profil2.page';

const routes: Routes = [
  {
    path: '',
    component: Profil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profil2PageRoutingModule {}
