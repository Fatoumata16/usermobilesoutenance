import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremierePageRoutingModule } from './premiere-routing.module';

import { PremierePage } from './premiere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremierePageRoutingModule
  ],
  declarations: [PremierePage]
})
export class PremierePageModule {}
