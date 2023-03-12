import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prev4PageRoutingModule } from './prev4-routing.module';

import { Prev4Page } from './prev4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prev4PageRoutingModule
  ],
  declarations: [Prev4Page]
})
export class Prev4PageModule {}
