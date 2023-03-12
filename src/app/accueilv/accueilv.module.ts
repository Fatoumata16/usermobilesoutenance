import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilvPageRoutingModule } from './accueilv-routing.module';

import { AccueilvPage } from './accueilv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilvPageRoutingModule
  ],
  declarations: [AccueilvPage]
})
export class AccueilvPageModule {}
