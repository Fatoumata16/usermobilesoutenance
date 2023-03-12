import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirmoyennePage } from './voirmoyenne.page';

const routes: Routes = [
  {
    path: '',
    component: VoirmoyennePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirmoyennePageRoutingModule {}
