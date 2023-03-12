import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prev2PageRoutingModule } from './prev2-routing.module';

import { Prev2Page } from './prev2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prev2PageRoutingModule
  ],
  declarations: [Prev2Page]
})
export class Prev2PageModule {}
