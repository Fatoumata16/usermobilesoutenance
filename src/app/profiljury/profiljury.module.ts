import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiljuryPageRoutingModule } from './profiljury-routing.module';

import { ProfiljuryPage } from './profiljury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiljuryPageRoutingModule
  ],
  declarations: [ProfiljuryPage]
})
export class ProfiljuryPageModule {}
