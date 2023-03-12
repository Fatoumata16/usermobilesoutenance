import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mes2PageRoutingModule } from './mes2-routing.module';

import { Mes2Page } from './mes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mes2PageRoutingModule
  ],
  declarations: [Mes2Page]
})
export class Mes2PageModule {}
