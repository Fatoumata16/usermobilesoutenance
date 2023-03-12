import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Votejury2PageRoutingModule } from './votejury2-routing.module';

import { Votejury2Page } from './votejury2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Votejury2PageRoutingModule
  ],
  declarations: [Votejury2Page]
})
export class Votejury2PageModule {}
