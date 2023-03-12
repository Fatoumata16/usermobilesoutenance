import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginvraiPage } from './loginvrai.page';

const routes: Routes = [
  {
    path: '',
    component: LoginvraiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginvraiPageRoutingModule {}
