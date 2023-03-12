import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vote2PageRoutingModule } from './vote2-routing.module';

import { Vote2Page } from './vote2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vote2PageRoutingModule
  ],
  declarations: [Vote2Page]
})
export class Vote2PageModule {}
