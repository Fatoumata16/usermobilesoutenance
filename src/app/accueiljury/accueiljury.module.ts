import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueiljuryPageRoutingModule } from './accueiljury-routing.module';

import { AccueiljuryPage } from './accueiljury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueiljuryPageRoutingModule
  ],
  declarations: [AccueiljuryPage]
})
export class AccueiljuryPageModule {}
