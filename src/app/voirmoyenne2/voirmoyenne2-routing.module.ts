import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Voirmoyenne2Page } from './voirmoyenne2.page';

const routes: Routes = [
  {
    path: '',
    component: Voirmoyenne2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Voirmoyenne2PageRoutingModule {}
